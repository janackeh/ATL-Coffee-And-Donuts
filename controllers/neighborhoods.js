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
const NeighborhoodApi = require('../models/neighborhoods.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const neighborhoodRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
neighborhoodRouter.get("/", (req, res) => {
  neighborhoodApi.getAllNeighborhoods().then(neighborhoods => {
      res.json(neighborhoods);
    });
  });
  
  neighborhoodRouter.get("/:neighborhoodsId", (req, res) => {
    neighborhoodsApi
      .getNeighborhood(req.params.neighborhoodsId)
      .then(neighborhoods => {
        res.json(neighborhoods);
      })
      .catch(err => {
        console.log(err);
      });
  });
  
  neighborhoodRouter.post("/", (req, res) => {
    neighborhoodApi
      .addNewNeighborhood(req.body)
      .then(neighborhood => {
        res.json(neighborhood);
      })
      .catch(err => {
        console.log(err);
      });
  });
  
  neighborhoodRouter.put("/:neighborhoodId", (req, res) => {
    neighborhoodApi
      .updateNeighborhood(req.params.neighborhoodId, req.body)
      .then(updateNeighborhood => {
        res.json(updateNeighborhood);
      })
      .catch(err => {
        console.log(err);
      });
  });
  
  neighborhoodRouter.delete("/:neighborhoodId", (req, res) => {
    neighborhoodApi
      .deleteNeighborhood(req.params.neighborhoodId)
      .then(neighborhood => {
        res.json(neighborhood);
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
  neighborhoodRouter
  
}
