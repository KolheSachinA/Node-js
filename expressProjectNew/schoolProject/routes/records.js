const express = require("express");
const router = express.Router();
const connection = require("../util/connection");
const jwt = require("jsonwebtoken");
const importAuthFun = require("../util/verifyAuth");

router.get("/showRecord", (req, res, next) => {
    let pageNo;
    let limitvalue;
    if (req.query.page === undefined) {
      pageNo = 1;
      limitvalue = 2;
      console.log(pageNo);
      console.log(limitvalue);
    } else {
      pageNo = req.query.page;
      limitvalue = req.query.limit;
      console.log(limitvalue);
      console.log(pageNo);
    }
    connection.query(`SELECT * FROM studentData LIMIT ${(pageNo - 1) * limitvalue} ,${
        limitvalue * 1 }`,
      function (error, results, fields) {
        if (error) {
          console.log(errror);
          return;
        }else{
          res.render("showRecord", {
            records: results,
            pageNo,
            limitvalue,
          })
        }
    })
});

// router.get("/addRecord", (req, res, next) => {
//   try {
//     importAuthFun.verifyJwtAuth(req.cookies.jwtToken.code).then((result) => {
//       if (result === "Verified Successfully") {
//         res.render("addRecord");
//       }
//     });
//   } catch (error) {
//     console.log("incorrect token!");
//     res.send("<h3>login please!</h3>");
//   }
// });

router.get("/updateRecord", (req, res, next) => {
  const { fname, studentId } = req.query;
  //const studentId = req.query.studentId;
  console.log(fname, studentId);
  connection.query(
    `select * from studentdata where studentId = '${studentId}'`,
    (error, result) => {
      if (error) console.log("Unable to find results!");
      //res.render('studentData', { result })
      res.render("updateRecord", { fname, studentId, result });
    }
  );

  //res.render("updateRecord", { fname, studentId ,result});
});

router.get("/deleteRecord", (req, res, next) => {
  // res.render('addRecord')
  const studentId = req.query.studentId;
  console.log(studentId);
  connection.query(
    `DELETE FROM studentData WHERE studentId=${studentId}`,
    (error) => {
      if (error) {
        return console.log(error);
      }
      res.send("<h1>Data Deleted successfully!</h1>");
      //res.render('showRecord');
      //res.send('Data deleted!')
    }
  );
});

router.get("/studentData", (req, res, next) => {
 
   importAuthFun.verifyJwtAuth(req.cookies.jwtToken.code).then((result) => {
    if (result === "Verified Successfully") {
      res.render('studentData');
    }
   })
   
});

module.exports = router;
