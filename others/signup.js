const pool = require("../models/db");
const bcrypt = require("bcrypt");
const createTokens = require("./jwt");
const { getOtp } = require("./signup/signupOtp");

let validateEmail = (email) => {
  let validRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  return validRegex.test(email);
};

let validateMobNum = (num) => {
  var ph = new RegExp(/^[6789]\d{9}$/);
  return ph.test(num);
};

let checkExists = async (data, resultData) => {
  let checkStatus;
  if (resultData) {
    checkStatus = await pool.query("select * from userdetails where email=$1", [
      data,
    ]);
    if (checkStatus.rows[0]) return false;
  } else {
    checkStatus = await pool.query(
      "select * from userdetails where mobnum=$1",
      [data]
    );
    if (checkStatus.rows[0]) return false;
  }
  return true;
};


let signup = async (req, res) => {
  const { firstdata, fullname, username, password, dob, otp } = req.body;
  let result = firstdata.replace(/\d/g, "");
  if (checkExists(firstdata, result)) {
    res.send(400).json({ message: "Invalid data !" });
    return;
  } else {
    if (result) {
      if (validateEmail(firstdata)) result = "email";
      else {
        res.send(400).json({ message: "Invalid data !" });
        return;
      }
    } else {
      if (validateMobNum(firstdata)) result = "mobnum";
      else {
        res.send(400).json({ message: "Invalid data !" });
        return;
      }
    }
  }
  let newDob = new Date(dob);

  let hashPass = bcrypt.hash(password, 8);

  // try {
  //     await pool.query("insert into userdetails("+result+",fullname,username,password) values($1,$2,$3,$4)",[firstdata,fullname,username,hashPass]);
  // } catch (error) {
  //     res.send("Error in creating he user!");
  // }

  // .then((hashPass)=>{
  //     pool.query("insert into userdetails("+result+",fullname,username,password) values($1,$2,$3,$4)",[firstdata,fullname,username,hashPass]);
  // })
  // .then(()=>console.log("Data added Successfully!"))
  // .catch((err)=>{
  //     console.log("Error!");
  // })
  res.send("Signup");
};

module.exports = signup;
