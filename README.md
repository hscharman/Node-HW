# Node-HW

This app presents a customer with purchase options by connecting to a MySQL database containing a list of products, each product's ID number, and the number of that particular item in stock. The app also utilizes Inquirer to ask the customer questions about the purchase they would like to make. Customers can request a product, purchase a product, or exit the shop. 

# How it Works

First, the customer is prompted to enter the ID # of the product they wish to buy. If the item is not available, the user will be notified and prompted to pick something else. If the item is available but the quantity the user wants to buy is not in stock, the customer will see an "insufficient quantity" message and again be prompted to request an item.

If the item and quantity are available, the purchase will be made successfully. A confirmation message will appear with the product name and quantity purchased. 

<img width="740" alt="successful" src="https://user-images.githubusercontent.com/53710485/73638507-c4f0b680-4627-11ea-9aec-cf0fd62240e8.PNG">

<img width="555" alt="not_in_stock" src="https://user-images.githubusercontent.com/53710485/73638505-c3bf8980-4627-11ea-8064-a7d49f5e76b9.PNG">

# To Leave the App

If the user wants to exit the shop at any point, they can do so by typing "q" and will receive a goodbye message.

<img width="512" alt="exit" src="https://user-images.githubusercontent.com/53710485/73638496-c15d2f80-4627-11ea-8251-ca904f52fd87.PNG">

