var express = require("express");
const connection = require("../util/connection");
var router = express.Router();
// const jwt = require('jsonwebtoken');
// const mongoConnection = require('../utils/connection').connectionObject;
// const importAuthFun = require('../utils/verifyAuth');

router.post("/update_auth", function (req, res, next) {
  const { first_name, studentId, section, lname, bio, email } = req.body;
  //console.log(name, studentId);
  connection.query(
    `UPDATE studentData SET fname = '${first_name}' ,lname = '${lname}' ,section = '${section}' , bio = '${bio}' ,email = '${email}' WHERE studentId = ${studentId}`,
    (error) => {
      if (error) {
        return console.log(error);
      }

      connection.query(
        `select * from studentData where studentId = ${studentId}`,
        (error, result) => {
          if (error) console.log(error);
          res.render("showRecord", {
            records: result,
            pageNo: 0,
            limitvalue: 2,
          });
        }
      );
    }
  );
});

module.exports = router;
