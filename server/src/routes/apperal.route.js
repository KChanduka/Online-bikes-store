import express from 'express';
import Apperal from '../models/apperal.model.js';

const router = express.Router();

// POST apperal
// Pass the apperal details to the request body (title, description, price, image)

router.post('/add-new', async (req, res) => {
    try{

        const {name, description, price, imageURL} = req.body;

        //validate the request body
        if(!name || !description || !price || !imageURL){
            return res.status(400).json({msg: 'Not all fields have been entered.'});
        }
        
        //create a new apperal instance
        const newApperal = new Apperal({
            name,
            description,
            price,
            imageURL,
        }); 

        //save the apperal (await the save operation to complete)

        const savedApperal = await newApperal.save();

        //send the saved apperal in the response
        res.json(savedApperal);

    }catch(error){
        res.status(500).json({error: error.message});
    }
});

//GET all apperals
//No need to pass anything to the request body

router.get('/', async (req, res) => {
    try{
        //get all apperals from the database
        const apperals = await Apperal.find();

        //if successful send apperals in the response
        res.json(apperals);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}); 

//GET a apperal by id
//Pass the apperal id to the request params

router.get('/:id', async (req, res) => {
    try{
        const apperalId = req.params.id;

        //find the apperal with the given id
        const apperal = await Apperal.findById(apperalId);

        //if successful send the apperal in the response
        res.json(apperal);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

// edit apperal details
router.put('/edit/:id', async (req, res) => {
    try{

        const {name, description, price, imageURL} = req.body;
        const apperalId = req.params.id;

        //validate the request
        if(!name || !description || !price || !imageURL){
            return res.status(400).json({msg: 'Not all fields have been entered.'});
        }

        //create a new apperal instance
        const updatedApperal = {
            name,
            description,
            price,
            imageURL,
        };

        //save the apperal (await the save operation to complete)
       await Apperal.findByIdAndUpdate(apperalId, updatedApperal).then((apperal) => {
            res.json(updatedApperal);
        });

    }catch(error){
        res.status(500).json({error: error.message});
    }
});

// delete apperal
router.delete('/delete/:id', async (req, res) => {
    try{
        const apperalId = req.params.id;

        //delete the apperal
        await Apperal.findByIdAndDelete(apperalId);

        //send a success message in the response
        res.json({msg: 'Apperal deleted successfully'});
    }catch(error){
        res.status(500).json({error: error.message});
    }
});


//Export the router
export  { router as ApperalRouter};

