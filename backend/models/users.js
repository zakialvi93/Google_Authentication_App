const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
 
  userName: {
    type: String,
    //required: true
  },
  email: {
    type: String,
    //required: true
  },
  password:{
    type: String,
    //required: true
  },
  source:{
    type: String
  },
  accessToken:{type:String},
  UptimeStart:{type:String},
  UptimeEnd:{type:String},
  BandwidthStart:{type:String},
  BandwidthEnd:{type:String},
  LatencyStart:{type:String},
  LatencyEnd:{type:String},
  PacketStart:{type:String},
  PacketEnd:{type:String},
});

module.exports = mongoose.model("User", UserSchema);
