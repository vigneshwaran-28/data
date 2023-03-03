const jwt=require('jsonwebtoken');
require('dotenv').config({path:'../.env'});

let verifyToken=async(req,res,next)=>{
    let token=req.headers.authorization.split(' ')[1];
    if(token){
            await jwt.verify(token,process.env.SECRET,(err,data)=>{
                if(err){
                    res.status(400).json({message:"Invalid Token!"});
                }
                else{
                    req.userid=data.userid;
                    // console.log(data);
                    next();
                }
            });
    }
    else{
        res.status(400).json({message:"missing Token!"});
    }
};

module.exports=verifyToken;
