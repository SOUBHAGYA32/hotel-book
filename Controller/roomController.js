import roomModel from '../Model/room';

module.exports.getRooms =  async(req,res)=>{
    try {
        const rooms = await roomModel.find({})
        res.send(rooms);
    } catch (error) {
        return res.status(400).json({message: error})
    }
}

module.exports.getroomsByid =  async(req,res)=>{
    const roomid = req.body.roomid
    try {
        const room = await roomModel.findOne({_id : roomid})
        res.send(room);
    } catch (error) {
        return res.status(400).json({message: error})
    }
}

module.exports.getallrooms =  async(req, res) => {
    console.log(req.body);
    try {
         const rooms = await roomModel.find({})
         res.send(rooms)
    } catch (error) {
         return res.status(400).json({ message: error });
    }
}

module.exports.addroom = async(req, res) => {
    const { room , 
       rent_perday, maxcount ,description ,phonenumber ,type ,image1 ,image2 ,image3} = req.body
  
       const newroom = new roomModel({
            name : room,
            rent_perday, 
            maxcount , description , phonenumber , type , image_urls:[image1 , image2 ,image3] , currentbooking:[]
       })
       try {
            await newroom.save();
            res.send('New Room Added Successfully')
       } catch (error) {
            return res.status(400).json({ error });
       }
  }