const send = require("send");
const Meal = require("../models/Meal");

const sendResponse = (res, statusCode, success, data = null, error = null) => {
    const response = { success };

    if (success && data) {
        response.data = data;
    }   

    if (!success && error) {
        response.error = error;
    }

    return res.status(statusCode).json(response);
};

const createMeal = async (req, res) => {
    try {
        
        
        const meal = await Meal.create({
            name: req.body.name,
            restaurant: req.body.restaurant,
            price: req.body.price,
            date: req.body.date,
            notes: req.body.notes
        });
        sendResponse(res, 201, true, {
            message: "Meal created successfully",
            messageData: meal
        } )
    } catch (error) {
        sendResponse(res, 500, false, null, "Failed to create meal");
        }
};

const getAllMeals = async (req, res) => {  
    try {
        const meals = await Meal.find();
            
        sendResponse(res, 200, true, { 
            messages: meals,
            totalMeals: meals.length
        });
    }catch (error) {
        sendResponse(res, 500, false, null, "Failed to retrieve meals");
    }
};

const getMealById = async (req, res) => {
    try {
        const {id} = req.params;
            
        if (!id) {
            return sendResponse(res, 400, false, null, "Meal ID is required");
        }

        const meal = await Meal.findById(id);

        if (!meal) {
            return sendResponse(res, 404, false, null, "Meal not found");
        }

        sendResponse(res, 200, true, { 
            message: meal
        });
    } catch (error) {
         sendResponse(res, 500, false, null, "Failed to retrieve meal");
    }
};

const updateMeal = async (req, res) => {
    try {
        const {id} = req.params;
        const updateData = req.body;

        if (!id) {
            return sendResponse(res, 400, false, null, "Meal ID is required");
        }
        const updatedMeal = await Meal.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedMeal) {
            return sendResponse(res, 404, false, null, "Meal not found");
        }

        sendResponse(res, 200, true, { 
            message: "Meal updated successfully",
            messageData: updatedMeal
        });
    } catch (error) {
        sendResponse(res, 500, false, null, "Failed to update meal");
    }
};

const deleteMeal = async (req, res) => {
    try {
        const {id} = req.params;
        if (!id) {
            return sendResponse(res, 400, false, null, "Meal ID is required");
        }
        
        const deletedMeal = await Meal.findByIdAndDelete(id);

        if (!deletedMeal) {
            return sendResponse(res, 404, false, null, "Meal not found");
        }

        sendResponse(res, 200, true, { 
            message: `Meal with ID ${id} deleted successfully`,
            deletedId: id
        });
    } catch (error) {
        sendResponse(res, 500, false, null, "Failed to delete meal");
    }
};

module.exports = {
    createMeal,
    getAllMeals,
    getMealById,
    updateMeal,
    deleteMeal
};