var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var x = Math.floor(Math.random() * 101) + 1
 var cartWithPrice = {
   itemName: item,
   itemPrice: x
 }
 cart.push(cartWithPrice)
 return (`${item} has been added to your cart.`)
}

function viewCart() {
  // write your code here
  var tempCart = []
  for (var i = 0; i < cart.length; ++i){
    tempCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  if (!cart.length){
    return ("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
  } else if (cart.length === 2) {

  }

  else {

  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
