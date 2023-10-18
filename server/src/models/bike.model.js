//bike model
//import mongoose
import mongoose from "mongoose";

//create a bike schema
const bikeSchema = new mongoose.Schema({


  name: { type: String, required: true },
  description: { type: String, required: true },
  price: {type: Number, required: true},
  imageURL: {type: String, required: true},

  
});

//create a model from the schema and export it
export default mongoose.model("bikes", bikeSchema);
