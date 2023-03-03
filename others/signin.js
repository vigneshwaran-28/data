const pool=require('../models/db');
const bcrypt=require('bcrypt');


// async function res(){
//     let final1=await pool.query('select * from userdetails');
//     for(let i=0;i<final1.rows.length;i++){
//         console.log(final1.rows[i].);
//     }
// }
// res();
let signin=async(req,res)=>{
    const {firstdata,password}=req.body;
    let hashPass;
    try {
       
        hashPass=await pool.query("select password from userdetails where email=$1",[firstdata]) 
        if(hashPass.rows[0]){
            bcrypt.compare(password,hashPass.rows[0].password)
            .then((result)=>{
                if(result)
                    res.json("Login Successful! using email ");
                else
                    res.json('Incorrect Password!');
            })
            return;
        }

        hashPass=await pool.query("select password from userdetails where username=$1",[firstdata])
         if(hashPass.rows[0]){
            bcrypt.compare(password,hashPass.rows[0].password)
            .then((result)=>{
                if(result)
                    res.json("Login Successful! using username ");
                else
                    res.json('Incorrect Password!');
            })
            return;
        }
        hashPass=await pool.query("select password from userdetails where mobnum=$1",[firstdata])
        if(hashPass.rows[0]){
            bcrypt.compare(password,hashPass.rows[0].password)
            .then((result)=>{
                if(result)
                    res.json("Login Successful! using mobnum ");
                else
                    res.json('Incorrect Password!');
            })
            return;
        }
    } 
    catch (error) {
        console.log("Error Ocuured2!")
    }
    if(!hashPass.rows.length){
        res.status(400).send('User does not exists!'); 
    }
}

module.exports=signin;
