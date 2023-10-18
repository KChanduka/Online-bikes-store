import express from "express";
import Bike from "../models/bike.model.js";

const router = express.Router();

// POST bike
// Pass the bike details to the request body (title, description, price, image)

router.post("/add-new", async (req, res) => {
  try {
    const { name, description, price, imageURL } = req.body;

    // Validate the request body
    if (!name || !description || !price || !imageURL) {
      return res.status(400).json({ msg: "Not all fields have been entered." });
    }

    // Create a new bike instance
    const newBike = new Bike({
      name,
      description,
      price,
      imageURL,
    });

    // Save the bike (await the save operation to complete)
    const savedBike = await newBike.save();

    // Send the saved bike in the response
    res.json(savedBike);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET all bikes
// No need to pass anything to the request body

router.get("/", async (req, res) => {
  try {
    // Get all bikes from the database
    const bikes = await Bike.find();

    // Send the bikes in the response
    res.json(bikes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET a bike by id
// Pass the bike id to the request params
router.get("/:id", async (req, res) => {
  try {
    const bikeId = req.params.id;

    // Find the bike with the given id
    const bike = await Bike.findById(bikeId);

    // Send the bike in the response
    res.json(bike);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//edit bike details
router.put("/edit/:id", async (req, res) => {
  try {
    const { name, description, price, imageURL } = req.body;
    const bikeId = req.params.id;

    // Validate the request body
    if (!name || !description || !price || !imageURL) {
      return res.status(400).json({ msg: "Not all fields have been entered." });
    }

    // Create a new bike instance
    const updatedBike = {
      name,
      description,
      price,
      imageURL,
    };

    // Save the bike (await the save operation to complete)
    await Bike.findByIdAndUpdate(bikeId, updatedBike).then((bike) => {
      res.json(updatedBike);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//delete bike
router.delete("/delete/:id", async (req, res) => {
  try {
    const bikeId = req.params.id;

    await Bike.findByIdAndDelete(bikeId);
    res.json({ msg: "Bike deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Export the router
export { router as BikeRouter };
