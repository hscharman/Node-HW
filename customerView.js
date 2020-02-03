// Initialize pkgs
var mysql = require("mysql");
var inquirer = require("inquirer");

// Connect to Database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "2Acidpops?",
  database: "bamazon_db"
});

//Throw error and/or load data
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  showProducts();
});

//Show the customer the available products
function showProducts() {
  // Selects all of the data from the MySQL products table
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    //Ask the customer what item they would like to buy
    promptCustomer(res);
  });
}

// Prompt the customer for a product ID
function promptCustomer(inventory) {
  // Prompts user for what they would like to purchase
  inquirer
    .prompt([
      {
        type: "input",
        name: "choice",
        message: "What item (enter the ID #) would you like to buy? [Quit with Q]",
        validate: function(val) {
          return !isNaN(val) || val.toLowerCase() === "q";
        }
      }
    ])
    .then(function(val) {
      // Give customer option to exit shop
      exitShop(val.choice);
      var choiceId = parseInt(val.choice);
      var product = checkInventory(choiceId, inventory);

      //If item exists, ask how many they want
      if (product) {
        howManyItems(product);
      }
      else {
        //If item doesn't exist, log:
        console.log(" " + "Sorry! We don't have that in stock right now.");
        //Display products again
        showProducts();
      }
    });
}

// Ask user how many items they want to buy
function howManyItems(product) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "quantity",
        message: "How many do you want to purchase? [Quit with Q]",
        validate: function(val) {
          return val > 0 || val.toLowerCase() === "q";
        }
      }
    ])
    .then(function(val) {
      // Check if the user wants to quit the program
      exitShop(val.quantity);
      var quantity = parseInt(val.quantity);

      // If there isn't enough of the chosen product and quantity, let the user know and re-run loadProducts
      if (quantity > product.stock_quantity) {
        console.log("\nSorry, insufficient quantity :(");
        showProducts();
      }
      else {
        // Run the buyProduct func, show item and its quantity
        buyProduct(product, quantity);
      }
    });
}

// Buy the item and update database accordingly
function buyProduct(product, quantity) {
  connection.query(
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    [quantity, product.item_id],
    function(err, res) {
      // Let the user know the purchase was successful, re-run loadProducts
      console.log("\nYou purchased " + quantity + " " + product.product_name);
      showProducts();
    }
  );
}

// Check to see if product is in stock
function checkInventory(choiceId, inventory) {
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].item_id === choiceId) {
      // Then return match
      return inventory[i];
    }
  }
  // If not, return null
  return null;
}

// Check to see if the user wants to quit the program
function exitShop(choice) {
  if (choice.toLowerCase() === "q") {
    // Send goodbye message
    console.log("Have a nice day!");
    // Stop running
    process.exit(0);
  }
}
