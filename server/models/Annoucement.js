import mongoose from 'mongoose';

const annoucementpScehma = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    textfield: {
        type: String,
        required: true,
    },

});

// As a plugin use
// autoIncrement.initialize(mongoose.connection)
// userSchema.plugin(autoIncrement.plugin, "user")  // user collection 

const Annoucement = new mongoose.model('annoucement', annoucementpScehma);

export default Annoucement