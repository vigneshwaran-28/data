const pool = require("../../models/db");

let follow = async (req, res) => {
  let { followingId } = req.body;
  let data = req.userid;
  try {
    let result = data.toString().replace(/\d/g, "");
    let userid = data;

    if (result) {
      userid = await pool.query(
        "select userid from userdetails where username=$1",
        [data]
      );
    }
    if(result)
    req.userid = userid.rows[0].userid;
    await pool.query("insert into follow values($1,$2)", [
      req.userid,
      followingId,
    ]);
    res.status(200).json({ message: "followed successfully!" });
  } catch (error) {
    res.status(400).json({ message: "error while inserting data!" });
  }
};
module.exports = follow;
