// To define routes for client request,create routes folder and router.js

const express =require('express')

// import product controller
const productController =require('../controllers/productController')

//  import product controller
const wishlistController =require('../controllers/wishlistController')

// import cart controller
const cartController =require('../controllers/cartController')

// using express create object for router cls inorder to setup path
const router =new express.Router()

// resolve client request in various server routes
// api
// get-all products
router.get('/products/all-products',productController.getallproducts)

// view-products/id
router.get('/products/view-products/:id',productController.viewproduct)

//add to wishlist
router.post('/wishlist-products/add-product',wishlistController.addtowishlist)

// getwishlist
router.get('/wishlist-products/get-items',wishlistController.getwishlistItems)

// remove wishlist item
router.delete('/wishlist-products/remove-item/:id',wishlistController.removefromWishlist)

// add to cart
router.post('/cart-products/add-item',cartController.addtocart)
// get -cart
router.get('/cart-products/all-products',cartController.getCart)
// remove-cart-item
router.delete('/cart-products/remove-item/:id',cartController.removecartItem)

// empty cart
router.delete('/cart-products/remove-all-item',cartController.emptycart)

// incrementquantity
router.get('/cart-products/increment-item/:id',cartController.incrementCount)

// decrementquantity
router.get('/cart-products/decrement-item/:id',cartController.decrementCount)



// export
module.exports=router
