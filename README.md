## OOP and Functional Programming Exercises (JavaScript)

## Description

##### ShoppingCart - OOP
Created a:
- module named `ShoppingCart` which exports a `class`, as its default export,
- a new instance of the class in a variable `cart`

The methods of this class are:
* `cart.getItems()` - initially returns an empty array, after items are added returns an array that includes the added items
* `cart.addItem(itemName, quantity, price)` - adds a new item to the internal array
* `cart.clear()` - removes all items from the items array
* `cart.total()` - returns the total value of the shopping cart

##### Transform - FP

Created a module named `transform` that exports a function named `groupAdultsByAgeRange`. The function is called with an array of objects as its argument.
The objects represent people, with a property `name` and a property `age`. 
`groupAdultsByAgeRange` - groups each person over the age of 18 into age ranges. 

## Run
* `yarn install`
* `yarn test`
## License
MIT Licence - Copyright &copy; 2018 - Alina Rusu
