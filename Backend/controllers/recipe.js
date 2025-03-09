const Recipes=require("../models/recipeModel")
const multer=require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + '-' + file.fieldname
    cb(null, filename)
  }
})

const upload = multer({ storage: storage })

// const getRecipes=async(req,res)=>{
//     const recipes=await Recipes.find()
//     return res.json(recipes)
// }
// 
const getRecipes = async (req, res) => {
    const { cuisine, title } = req.query;
  
    try {
      let query = {};
  
      // Check if cuisine is provided and it's not empty
      if (cuisine) {
        query.cuisine = { $regex: new RegExp(`^${cuisine}$`, "i") };  // Exact match but case-insensitive
      }
      
      // Check if title is provided and it's not empty
      if (title) {
        query.title = { $regex: new RegExp(title, "i") };  // Case-insensitive partial match
      }
  
      const recipes = await Recipes.find(query);  // Find recipes that match the query
      if (recipes.length === 0) {
        return res.status(404).json({ message: "No recipes found" });
      }
  
      return res.json(recipes);  // Return found recipes
    } catch (error) {
      console.error("Error fetching recipes:", error);
      return res.status(500).json({ message: "Error fetching recipes" });
    }
  };
  

const getRecipe=async(req,res)=>{
        const recipes=await Recipes.findById(req.params.id)
        res.json(recipes)
}

const addRecipe=async(req,res)=>{
  console.log(req.user)
    const {title, instructions, ingredients, time, cuisine}=req.body

    if(!title || !instructions || !ingredients)
    {
        res.json({message:"Required fileds cant be empty"})
    }
    const newRecipe = await Recipes.create({
        title, 
        instructions, 
        ingredients, 
        time,
        cuisine,
        coverImage:req.file.filename,
        createdBy:req.user.id
    })

    return res.json(newRecipe)
}

const editRecipe=async(req,res)=>{
    const {title, instructions, ingredients, time ,cuisine}=req.body
    let recipe=await Recipes.findById(req.params.id)
    try
    {

        if(recipe)
        {
            let coverImage=req.file?.filename ?req.file?.filename: recipe.coverImage
            await Recipes.findByIdAndUpdate(req.params.id,{...req.body,coverImage},{new:true})
            res.json({title, instructions, ingredients, time, cuisine})
    
        }
        
    }
    catch(err){
        return res.status(404).json({message : "Error fetching the Recipe..."})
    }
}

const deleteRecipe=async(req,res)=>{
    try{
        await Recipes.deleteOne({_id:req.params.id})
        res.json({status:"ok"})
    }
    catch(err){
      return res.status(400).json({message:"error"})
    }
}


module.exports={getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe,upload}