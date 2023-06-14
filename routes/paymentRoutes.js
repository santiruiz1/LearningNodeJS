const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  app.post("/api/payments", requireLogin, async (req, res) => {
    await stripe.charges.create({
    amount: 500,
    currency: 'usd',
    source: req.body.id,
    description: 'Test Charge',
    });
    
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
