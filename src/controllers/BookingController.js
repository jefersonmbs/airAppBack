//Index, Show, Sotore, Update, Destroy
const Booking = require('../models/Booking');
const Spot = require('../models/Spot')
const User = require('../models/User')






module.exports= {

    async store(req,res){  
       
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;
        console.log(date);
        console.log(spot_id);
        console.log(user_id);
        const spot = await Spot.findById(spot_id);
        const user = await User.findById(user_id);

      
       
        if(!user){
            return res.status(400).json({erro: 'Usuário Inexistente'})
        }
        if(!spot){
            return res.status(400).json({erro: 'Spot Inexistente'})
        }
        const booking = await Booking.create({user : user_id,
            spot : spot_id,
            date,
        });

        await booking.populate('spot').populate('user').execPopulate();

        return res.json({booking})

        
    }
    

}