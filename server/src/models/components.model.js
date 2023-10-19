//component model
//import mongoose
import mongoose from "mongoose";

//create a component schema

const componentSchema = new mongoose.Schema({

    name: { type: String, required: true },
    description: { type: String, required: true },
    price: {type: Number, required: true},
    imageURL: {type: String, required: true},
    
    
    
});

//create a model from the schema and export it
export default mongoose.model("components", componentSchema);
