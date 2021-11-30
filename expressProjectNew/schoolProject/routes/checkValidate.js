var express = require("express");
const connection = require("../util/connection");
var router = express.Router();

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
          //counter condition needs to add
          console.log(results);
          console.log("login suceessful!");
          connection.query(
            `select * from studentdata where email = '${email}'`,
            (error, result) => {
              if (error) console.log("Unable to find results!");
              //res.render('studentData', { result })
              res.render("welcome");
            }
          );
        } else {
          console.log("check username and password!");
          res.status(400).send("check username and password!");
        }
      }
    );
  } catch (e) {
    console.log("error!");
  }
  //res.render('index', { title: 'Express' });
});

router.post("/authorizeLogin", function (req, res, next) {
  const uname = req.body.Uname;
  const pass = req.body.Pass;
  connection.query(
    `SELECT * FROM Admin WHERE username='${uname}' `,
    (error, result) => {
      if ((result[0].username === uname) & (result[0].password === pass)) {
        console.log("matched");
        // res.send('<h1>Welcome!</h1>')
        //  console.log('Heloooooooooo');
        //  let tokenGen;
        //  const secret = 'QWER@#$^';
        //  //generate token
        //  jwt.sign({ user: 'IoneTech' },secret, function(err, token) { // step -1 creating a token
        //      if (err) {
        //          console.log(err);
        //          res.status(500).send(err);
        //          return;
        //      } else {
        //          console.log('Inside');
        //          tokenGen = token;
        //          console.log(token);
        //          const tokenObj = {
        //              code : token=
        //          }
        //          res.cookie('jwtToken',tokenObj); // step -2 & 3 , creating a cookie an dloading token in cookie
        //res.render('index', { title: 'express' });
        res.render("welcome");
        //res.send("login suceesfully!");
      } else {
        res.send("<h1>invalid input and password!</h1>");
      }
    }
  );
});

module.exports = router;

module.exports = router;
