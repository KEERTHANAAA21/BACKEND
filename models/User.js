const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"] 
  },
  password: { 
    type: String, 
    required: true, 
  }
});

module.exports = mongoose.model("User", UserSchema);

