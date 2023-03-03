const pool = require("../../models/db");
const bcrypt = require("bcrypt");
const createTokens=require('../jwt/createToken');

let addUser = async (req, res) => {
  const { firstdata, fullname, username, password, dob } = req.body;
  let result = firstdata.replace(/\d/g, "");
  result = result ? "email" : "mobnum";
  let hashPass = await bcrypt.hash(password,5);
  try {
    let token=createTokens({userid:username});
    await pool.query(
      "insert into userdetails("+
        result +
        ",fullname,username,password,dob,token) values($1,$2,$3,$4,$5,$6)",
      [firstdata, fullname, username, hashPass,dob,token]
    );
    req.userid=username;
    res.status(200).json({ message: "Data inserted Successfully!" });
  } catch (error) {
    res.status(400).json({ message: "Error caught while inserting into db!" });
  }
};

module.exports = addUser;
