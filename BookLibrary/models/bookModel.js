const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({

  title:{
    type:String,
    required:[true,"Title is required"],
    minlength:[3,"Name must be at least 3 characters"],
    maxlength:[50,"Name cannot exceed 50 characters"],
    trim:true
  },

  author:{
    type:String,
    required:[true,"Title is required"],
    minlength:[3,"Name must be at least 3 characters"],
    maxlength:[50,"Name cannot exceed 50 characters"],
    trim:true
  },

  tags: {
    type: [String], 
    required: [true, "At least one tag is required"],
    validate: {
      validator: function(v) {
        return v.length > 0; 
      },
      message: "Book must have at least one tag"
    }
  },


  status:{
    type:String,
    enum:["Want to Read","Reading","Completed"],
    default:"Want to Read"
  },

  userId:{
    required:[true,"User ID is required"],
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }

},{timestamps:true})

module.exports = mongoose.model("Book",bookSchema)