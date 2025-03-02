const express = require("express")
const{getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe,upload} = require("../controllers/recipe")
const verifyToken = require("../middleware/auth")
const router = express.Router()

router.get("/",getRecipes) //Fetch all the recipes
router.get("/:id",getRecipe) //Fetch recipes by id
router.post("/", upload.single('file'),verifyToken,addRecipe) //To add recipes
router.put("/:id",editRecipe) //To edit recipes
router.delete("/:id",deleteRecipe) //Fetch all the recipes




module.exports=router