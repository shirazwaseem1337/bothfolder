import mongoose from 'mongoose';

const scholarshipScehma = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        enum: ["Merit", "Need", "Both"]
    },

    eligible: {
        type: String,
        enum: ["Pakistani", "International"]
    },
    date: {
        type: String,
        required: true,
    },
});

// As a plugin use
// autoIncrement.initialize(mongoose.connection)
// userSchema.plugin(autoIncrement.plugin, "user")  // user collection 

const Scholarship = new mongoose.model('scholarship', scholarshipScehma);

export default Scholarship