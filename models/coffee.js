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
const CoffeeSchema = new mongoose.Schema({
 name: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */

 const CoffeeCollection = mongoose.model('Coffee', CoffeeSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllCoffees() {
  return CoffeeCollection.find();
}

function getCoffee(coffeeId) {
  return CoffeeCollection.findById(coffeeId);
}

function addNewCoffee(coffeeObject) {
  return CoffeeCollection.create(coffeeObject);
}

function updateCoffee(coffeeId, updatedCoffee) {
  return CoffeeCollection.findByIdAndUpdate(coffeeId, updatedCoffee, {
    new: true
  });
}

function deleteCoffee(coffeeId) {
  return CoffeeCollection.findByIdAndDelete(coffeeId);
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllCoffees,
  getCoffee,
  addNewCoffee,
  updateCoffee,
  deleteCoffee
 
}
