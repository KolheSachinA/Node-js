var express = require("express");
const connection = require("../util/connection");
var router = express.Router();
const jwt = require("jsonwebtoken");
const importAuthFun = require("../util/verifyAuth");
const importAuthAdmin = require('../util/verifyauthAdmin');

/* GET home page. */
router.post("/checkValidate", function (req, res, next) {
  const email = req.body.email;
  const pass = req.body.pass;
  console.log(email, pass);
  try {
    connection.query(
      `select * from studentdata where email = '${email}'`,
      (error, results, fields) => {
        if (results[0].email === email && results[0].password === pass) {
          console.log(results);
          console.log("login suceessful!");
          let tokenGen;
          const secret = "QWER@#$^";
          //generate token
          jwt.sign({ user: "IoneTech" }, secret, function (err, token) {
            if (err) {
              console.log(err);
              res.status(500).send(err);
              return;
            } else {
              connection.query(
                `select * from studentdata where email = '${email}'`,
                (error, result) => {
                  if (error) console.log("Unable to find results!");
                  res.render("studentData", { result });
                  // res.render("welcome");
                }
              );
              tokenGen = token;
              console.log(token);
              const tokenObj = {
                code: token,
               role : 'student',
               email
              };

              res.cookie("jwtToken", tokenObj); 
              //res.send("<h2>Token Created</h2>");
            }
          });
        }
      }
    );
  } catch (e) {
    console.log(error);
  }
});

router.post("/authorizeLogin", function (req, res, next) {
  const uname = req.body.Uname;
  const pass = req.body.Pass;
  connection.query(
    `SELECT * FROM Admin WHERE username='${uname}' `,
    (error, result) => {
      if ((result[0].username === uname) & (result[0].password === pass)) {
        console.log("matched");
        const secret = "asd123@#$^";
        //generate token
        jwt.sign({ user: "sak" }, secret, function (err, token) {
          if (err) {
            console.log(err);
            res.status(500).send(err);
            return;
          }else {
            connection.query(
              `select * from studentdata `,
              (error, result) => {
                if (error) console.log("Unable to find results!");
                const tokenObj = {
                  code: token,
                  role : 'Admin',
                  email :uname
                }
                res.cookie("admin", tokenObj);
                res.render("studentData", { result });
                // res.render("welcome");
              }
            );
           
           }
          
        });

      } else {
        res.send("<h1>invalid input and password!</h1>");
      }
    }
  );
});

module.exports = router;
