const signup = require("../controllers/signup/signup");
const addUser = require("../controllers/signup/addUser");
const getDob = require("../controllers/signup/signupDob");
const getOtp = require("../controllers/helperFunction/otpGeneration");
const validateEmail = require("../controllers/helperFunction/validateEmail");
const validateMobNum = require("../controllers/helperFunction/validateMobNum");
const verifyOtp = require("../controllers/helperFunction/verifyOtp");
const signin = require("../controllers/signin/signin");
const forgotPassword = require("../controllers/forgotPassword/forgotPassword");
const resetPassword = require("../controllers/forgotPassword/resetPassword");
const verifyToken=require('../middleware/verifyToken');
const follow=require('../controllers/follow/follow');
const unfollow=require('../controllers/follow/unfollow');


let arr = [
  {
    type: "post",
    endPoint: "/signup",
    callBack: signup,
  },
  {
    type: "post",
    endPoint: "/adduser",
    callBack: addUser,
  },
  {
    type: "post",
    endPoint: "/getdob",
    callBack: getDob,
  },
  {
    type: "post",
    endPoint: "/getotp",
    callBack: getOtp,
  },
  {
    type: "post",
    endPoint: "/signin",
    callBack: signin,
  },
  {
    type: "post",
    endPoint: "/validateEmail",
    callBack: validateEmail,
  },
  {
    type: "post",
    endPoint: "/validateMobNum",
    callBack: validateMobNum,
  },
  {
    type: "post",
    endPoint: "/verifyOtp",
    callBack: verifyOtp,
  },
  {
    type: "post",
    endPoint: "/forgotPassword",
    callBack: forgotPassword,
  },
  {
    type: "post",
    endPoint: "/resetPassword",
    callBack: resetPassword,
  },{
    type: "post",
    endPoint: "/follow",
    middleware:[verifyToken],
    callBack: follow,
  },{
    type: "post",
    endPoint: "/unfollow",
    middleware:[verifyToken],
    callBack: unfollow,
  }
];

module.exports = arr;
  