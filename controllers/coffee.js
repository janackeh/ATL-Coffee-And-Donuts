/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const coffeeApi = require('../models/coffee.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const coffeeRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
coffeeRouter.get("/", (req, res) => {
  coffeeApi.getAllCoffees().then(coffee => {
      res.json(coffee);
    });
  });
  
  coffeeRouter.get("/:coffeeId", (req, res) => {
    coffeeApi
      .getCoffee(req.params.coffeeId)
      .then(coffee => {
        res.json(coffee);
      })
      .catch(err => {
        console.log(err);
      });
  });
  
  coffeeRouter.post("/", (req, res) => {
    coffeeApi
      .addNewCoffee(req.body)
      .then(coffee => {
        res.json(coffee);
      })
      .catch(err => {
        console.log(err);
      });
  });
  
  coffeeRouter.put("/:coffeeId", (req, res) => {
    coffeeApi
      .updateCoffee(req.params.coffeeId, req.body)
      .then(updateCoffee => {
        res.json(updateCoffee);
      })
      .catch(err => {
        console.log(err);
      });
  });
  
  coffeeRouter.delete("/:coffeeId", (req, res) => {
    coffeeApi
      .deleteCoffee(req.params.coffeeId)
      .then(coffee => {
        res.json(coffee);
      })
      .catch(err => {
        console.log(err);
      });
  });

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  coffeeRouter
}
