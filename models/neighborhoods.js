/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */


/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const NeighborhoodSchema = new mongoose.Schema({
 name: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const NeighborhoodCollection = mongoose.model('Neighborhood', NeighborhoodSchema)



 function getAllNeighborhoods() {
    return NeighborhoodCollection.find();
  }

 function getNeighborhood(NeighborhoodId) {
    return NeighborhoodCollection.findById(NeighborhoodId);
  }
 function addNewNeighborhood(neighborhoodObject) {
  return NeighborhoodCollection.create(neighborhoodObject);
}

 function updateNeighborhood(neighborhoodId, updatedNeighborhood) {
  return NeighborhoodCollection.findByIdAndUpdate(neighborhoodId, updatedNeighborhood, {
    new: true
  });
}

 function deleteNeighborhood(neighborhoodId) {
  return NeighborhoodCollection.findByIdAndDelete(neighborhoodId);
} 

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
    getAllNeighborhoods,
    getNeighborhood,
    addNewNeighborhood,
    updateNeighborhood,
    deleteNeighborhood

    
}
