const express = require('express');
const router = express.Router();
const items = require('../items.js');

router.get('/', (req, res, next) => {
  console.log(req.session.cart);
  res.render('layout', {
    title: 'Albums',
    items,
    partials: {
      content: 'index'
    }
  });
});

// Handle a post form from clicking on the add to cart button
router.post('/', (req, res, next) => {
  req.session.cart = req.session.cart || [];
   
  // Add the id of the item to the session however many times the user selected
  for (let i = 0; i < req.body.quantity; i++) {
    req.session.cart.push(req.body.id);
  }
  console.log(req.session.cart);
  res.redirect('/');
});

// Handle the request to view the users shopping cart
router.get('/cart', (req, res, next) => {
  console.log('req.session.cart', req.session.cart);

  // Loop through each item id in the cart array in the session
  const itemsInCart = [];
  req.session?.cart?.forEach(id => {
    // Double loop looping through each item for each id
    for (let i = 0; i < items.length; i++) {
      id = Number(id);
      // If the session id matches the fake db id, add that item to the itemsInCart array
      if (id === items[i].id) {
        itemsInCart.push(items[i]);
      }
    }
  });
  console.log(itemsInCart);
  res.render('layout', {
    title: 'Albums',
    itemsInCart, // Pass the itemsInCart in to the Hogan temptlate for rendering
    partials: {
      content: 'cart'
    }
  });
});

module.exports = router;
