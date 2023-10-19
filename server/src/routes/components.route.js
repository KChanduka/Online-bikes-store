import express from "express";
import Component from "../models/Component.model.js";

const router = express.Router();

// POST component
// Pass the component details to the request body (title, description, price, image)

router.post("/add-new", async (req, res) => {
  try {
    const { name, description, price, imageURL } = req.body;

    // Validate the request body
    if (!name || !description || !price || !imageURL) {
      return res.status(400).json({ msg: "Not all fields have been entered." });
    }

    // Create a new component instance
    const newComponent = new Component({
      name,
      description,
      price,
      imageURL,
    });

    // Save the component (await the save operation to complete)
    const savedComponent = await newComponent.save();

    // Send the saved component in the response
    res.json(savedComponent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}); 

//Get all Components
//No need to pass anything to request body

router.get("/",async(req,res)=>{
    try{
        //Get all components from the database
        const components = await Component.find();

        //if successful send components in the response
        res.json(components);
    }catch(error){
        res.status(500).json({error:error.message});
    }
});

//Get a Component by id
//Pass the Component id to the request params
router.get("/:id",async(req,res)=>{
    try{
        const componenId =req.params.id;

        //Find the component by the given Id
        const component = await Component.findById(componenId);

        //If succesful end the bike in the response
        res.json(component);
    }catch(error){
        res.status(500).json({error:error.message});
    }
});

//edit component details
router.put("/edit/:id",async(res,req)=>{
    try{

        const {name,description,price,imageURL}=req.body;
        const componentId = req.params.id;

        //validate the request
    if(!name|| !description || !pice|| !imageURL){
        return res.status(400).json({msg: "Not all fields have been entered"});
    }
    
    //create a new component instance
    const updatedComponent={
        name,
        description,
        price,
        imageURL,
    };

    //save the component(await the save operation to complete)
    await Component.findByIdAndUpdate(componentId,updatedComponent).then((component)=>{
        res.json(updatedComponent);
    });
    }catch(error){
        res.status(500).json({error:error.message});
    }
});

//delete component
router.delete("/delete/:id",async(req,res)=>{
    try{
        const componentId = req.params.id;

        await Component.findByIdAndDelete(compoentId);
        res.json({msg:"Component Deleted"});
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

//export the router
export {router as ComponentRouter};