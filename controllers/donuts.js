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
const donutApi = require('../models/donuts.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const donutRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
 donutRouter.get("/", (req, res) => {
  donutApi.getAllDonuts().then(donuts => {
      res.json(donuts);
    });
  });
  
  donutRouter.get("/:donutId", (req, res) => {
    donutApi
      .getDonut(req.params.donutId)
      .then(donut => {
        res.json(donut);
      })
      .catch(err => {
        console.log(err);
      });
  });
  
  donutRouter.post("/", (req, res) => {
    donutApi
      .addNewDonut(req.body)
      .then(donut => {
        res.json(donut);
      })
      .catch(err => {
        console.log(err);
      });
  });
  
  donutRouter.put("/:donutId", (req, res) => {
    donutApi
      .updateDonut(req.params.donutId, req.body)
      .then(updateDonut => {
        res.json(updateDonut);
      })
      .catch(err => {
        console.log(err);
      });
  });
  
  donutRouter.delete("/:donutId", (req, res) => {
    donutApi
      .deleteDonut(req.params.donutId)
      .then(donut => {
        res.json(donut);
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
  donutRouter
}
