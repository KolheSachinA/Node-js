const express = require("express");
const router = express.Router();
const connection = require("../util/connection");

router.get("/showRecord", (req, res, next) => {
  try {

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
    connection.query(
      `SELECT * FROM studentData LIMIT ${(pageNo - 1) * limitvalue} ,${limitvalue * 1
      }`,
      function (error, results, fields) {
        if (results) {
          console.log(results.length);
          res.render("showRecord", {
            records: results,
            pageNo,
            limitvalue,
          });
        } else console.log(error);
      }
    );
  } catch (error) {
    console.log("incorrect token!");
    res.send("<h3>login please!</h3>");
  }
});

router.get("/updateRecord", (req, res, next) => {
  const { fname, studentId } = req.query;
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
  const email = req.query.email;
  console.log(email);
  connection.query(
    `DELETE FROM roles WHERE email = '${email}' `,
    (error) => {
      if (error) {
        return console.log(error);
      }
      res.redirect('showRecord')
    }
  );
});

module.exports = router;