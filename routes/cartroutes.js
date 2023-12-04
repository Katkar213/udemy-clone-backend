const express = require('express');
const { addToCart,getCartData,removecartitem, pushlearning,getlearning,deleteCart,search} = require("../controller/cartcontroller");
const router = express.Router();

router.post('/addToCart', addToCart)
      // .post('/fetchCartByUser', fetchCartByUser)
    //   .delete('/:id', deleteFromCart)

router.get("/getcartdata",getCartData);
router.post("/removeitem",removecartitem);

router.post("/pushlearningdata",pushlearning);
router.get("/getlearningdata",getlearning);
router.delete("/deletedata",deleteCart);
router.get("/search",search)

module.exports = router;