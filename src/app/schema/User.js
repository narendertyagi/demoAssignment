import mongoose from 'mongoose'

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var UserSchema = new mongoose.Schema({
    id: { type: Number},
    firstName: { type: String},
    lastName: { type: String},
    companyName: { type: String},
    age: { type: Number},
    city: { type: String},
    state: { type: String},
    zip: { type: Number},
    email: { type: String},
    web: { type: String}
}, { strict: false });





export default UserSchema