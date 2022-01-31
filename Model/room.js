import mongoose from 'mongoose';

const roomSchema = mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    image_urls : [],
    rent_perday : {
        type:Number,
        require: true
    },
    type : {
        type: String,
        require: true
    },
    maxcount : {
        type: Number,
        require: true
    },
    phonenumber : {
        type: Number,
        require: true
    },
    currentbooking : [],
    description : {
        type : String,
        require: true
    }
}, {
    timestamps: true,
})


const roomModel = mongoose.model('rooms', roomSchema);
export default roomModel