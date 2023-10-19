import express from 'express';
import Accessories from '../models/accessories.model.js';

const router = express.Router();

// POST accessories
// Pass the accessories details to the request body (title, description, price, image)

router.post('/add-new', async (req, res) => {
    try{
        const {name, description, price, imageURL} = req.body;

        //Validate the request body
        if(!name || !description || !price || !imageURL){
            return res.status(400).json({msg: 'Not all fields have been entered.'});
        }

        //Create a new accessories instance
        const newAccessories = new Accessories({
            name,
            description,
            price,
            imageURL,
        });

        //Save the accessories (await the save operation to complete)
        const savedAccessories = await newAccessories.save();

        //Send the saved accessories in the response
        res.json(savedAccessories);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

//GET all accessories
//No need to pass anything to the request body
router.get('/', async (req, res) => {
    try{
        //Get all accessories from the database
        const accessories = await Accessories.find();

        //If successful send accessories in the response
        res.json(accessories);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

//GET a accessories by id
//Pass the accessories id to the request params
router.get('/:id', async (req, res) => {
    try{
        const accessoriesId = req.params.id;

        //Find the accessories with the given id
        const accessories = await Accessories.findById(accessoriesId);

        //If successful send the accessories in the response
        res.json(accessories);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});


//edit accessories details
router.put('/edit/:id', async (req, res) => {
    try{
        const {name, description, price, imageURL} = req.body;
        const accessoriesId = req.params.id;    

        //Validate the request body
        if(!name || !description || !price || !imageURL){
            return res.status(400).json({msg: 'Not all fields have been entered.'});
        }

        //Create a new accessories instance
        const updatedAccessories = {
            name,
            description,
            price,
            imageURL,
        };

        //Save the accessories (await the save operation to complete)
        await Accessories.findByIdAndUpdate(accessoriesId, updatedAccessories).then((accessories) => {  
            res.json(updatedAccessories);
        });
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

//delete accessories
router.delete('/delete/:id', async (req, res) => {
    try{
        const accessoriesId = req.params.id;

        await Accessories.findByIdAndDelete(accessoriesId);
            res.json({msg : "accessories deleted"});
        
    } catch(error){
        res.status(500).json({error: error.message});
    }
});

//Export the router
export {router as AccessoriesRouter};