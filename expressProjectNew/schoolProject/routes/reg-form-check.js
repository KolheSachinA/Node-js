var express = require("express");
var router = express.Router();
const connection = require("../util/connection");
const moment = require('moment');

router.post("/reg-form-check", (req, res, next) => {
  const stId = req.body.stId;
  const studClass = req.body.class;
  const section = req.body.section;
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const password = req.body.password;
  const gender = req.body.gender;
  const income = req.body.income;
  const value = req.body.value;
  const age = req.body.age;
  const bio = req.body.bio;
  const date = req.body.date;
  const dateTimeFormatUpdate = 'YYYY-MM-DD HH:mm:ss';
  const time = moment.utc().format(dateTimeFormatUpdate);


  //insert into db:
  try {
    connection.query(
      `insert into roles (username,role) values ('${email}','Student')`,
      (error, results) => {
        if (error) {
          console.log(error);
          return;
        } else {
          connection.query(
            `INSERT INTO studentdata (class, section,fname,lname,email,gender,incomeSource,value,age,bio,DateOfAddmission,password )
             VALUES
              ('${studClass}' , '${section}' ,'${fname}' ,'${lname}','${email}','${gender}','${income}',${value},${age},'${bio}','${date}','${password}')`,
            (error, results) => {
              if (error) {
                return res.send(error);
          
              }

              connection.query(`insert into attendance values ('${email}','${time}',0,'{dates:[]}')`,(error,result)=>{
                if(error) return console.log(error);
                  
                  console.log('result of attendance:',result);
        
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
