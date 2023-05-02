const wishlists = require('../models/wishlistSchema')


exports.addtowishlist =async (req,res)=>{
    // get product details from request
    // using destructuring
    const{id,title,price,image} =req.body

    // logic
    try{
        const item =await wishlists.findOne({id})
        if(item){
            res.status(402).json('item already present in your wishlist')
        }
        else{
            // add item in wishlist collection
            const newProduct =new wishlists({
                id,title,price,image
            })
            // to store in db
            await newProduct.save()
            res.status(200).json('item added to your wishlist')
        }

    }
    catch(err){
        res.status(401).json(err)

    }
}

// get wishlist
exports.getwishlistItems =async (req,res)=>{
        // logic
        try{
            // get all products from wishlists collection in mongodb
        const allProducts =await wishlists.find()
        res.status(200).json(allProducts)
    
        }
        catch(error){
            res.status(401).json(error)
    
        }
}

// remove items

exports.removefromWishlist=async (req,res)=>{
    // get id from request
    const{id}=req.params
    // remove id from wishlist collection
    try{
        const removeItem =await wishlists.deleteOne({id})
        if(removeItem){
            // get all wishlist item after removing the particular item
            const allItems =await wishlists.find()
            res.status(200).json(allItems)

        }
        else{
            res.status(404).json("item not present in your wishlist")
        }

    }
    catch(error){
        res.status(401).json(error)

    }
}