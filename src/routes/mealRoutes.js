const express = require("express");
const router = express.Router();
const {
    createMeal,
    getAllMeals,
    getMealById,
    updateMeal,
    deleteMeal      
} = require("../controllers/mealcontroller");

router.post("/meal", createMeal);
router.get("/meal", getAllMeals);
router.get("/meal/:id", getMealById);
router.put("/meal/:id", updateMeal);
router.delete("/meal/:id", deleteMeal);

module.exports = router;