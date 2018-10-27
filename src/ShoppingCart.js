class ShoppingCart {
  constructor() {
    this.items = []
  }

  getItems() {
    return this.items
  }

  addItem(itemName, quantity, price) {
    const newItem = {}
    newItem.name = itemName
    newItem.quantity = quantity
    newItem.pricePerUnit = price
    this.items.push(newItem)
  }

  clear() {
    this.items.length = 0
  }

  total() {
    return this.items.reduce(
      (sum, item) => sum + (item.pricePerUnit * item.quantity),
      0)
  }
}

module.exports = ShoppingCart

