var express = require("express");
var router = express.Router();
const connection = require("../util/connection");
const moment = require('moment');
const exeQuery = require('../util/exeQuery').exeQuery;

router.post("/reg-form-check", (req, res, next) => {
  const { studClass, section, fname, lname, email, password, gender, income, value
            , age, bio, date } = req.body;
  
  const dateTimeFormatUpdate = 'YYYY-MM-DD HH:mm:ss';
  const time = moment.utc().format(dateTimeFormatUpdate);


  //insert into db:
  try {
    connection.query(
      `insert into roles (email,role) values ('${email}','Student')`,
      (error, results) => {
        if (error) {
          console.log(error);
          return;
        } else {
          connection.query(
            `INSERT INTO studentdata (class, section,fname,lname,email,gender,incomeSource,value,age,bio,DateOfAdmission,password )
             VALUES
              (${studClass} , '${section}' ,'${fname}' ,'${lname}','${email}','${gender}','${income}',${value},${age},'${bio}','${date}','${password}')`,
            (error, results) => {
              if (error) {
                return res.send(error);

              }
              const datesObj = { dates: [] };
              connection.query(`insert into attendance values ('${email}','${time}',0,'${JSON.stringify(datesObj)}')`, (error, result) => {
                if (error) return console.log(error);

                console.log('result of attendance:', result);

              })
              //res.send('welcome')
              connection.query(
                `select * from studentdata where email = '${email}'`,
                (error, result) => {
                  if (error) {
                    console.log("Unable to find results!");
                  }
                  res.render("studentData", { result });
                }
              );
              //res.send('<h1>Data inserted successfully!</h1>')
              //res.render('studentData',{})
            }
          );
        }
      }
    );

    //res.render('reg-form');
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;

