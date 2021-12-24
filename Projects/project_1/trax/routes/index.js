var express = require('express');
var router = express.Router();
const connection = require('../util/connection');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const nodemailer = require("nodemailer");
const { parse } = require('json2csv');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/checkLogin', function (req, res, next) {
  const { uname, pwd } = req.body;
  console.log(uname, pwd);
  connection().then(async (client) => {
    const dbName = 'project_1';
    console.log('start');
    const db = client.db(dbName);
    const collection = db.collection('projectOne');
    const findResult = await collection.find({ username: uname }).toArray();
    if (findResult[0].password == pwd) {
      console.log('sucess!');
      res.render('welcome')
    } else {
      console.log('failed!');
      res.render('index')
    }

  });
})


router.post('/checkwelcome', (req, res, next) => {
  const { start, end, status } = req.body
  console.log(start, end, status);
  connection().then(async (client) => {
    const dbName = 'project_1';
    console.log('start');
    const db = client.db(dbName);
    const collection = db.collection('complaints');
    const findResult = await collection.find({
      $and: [{ startDate: { $gte: start, $lt: end } },
      { status: status }]
    }).toArray().then((result) => {
      if (result.length === 0) {
        res.send('no records found!')
      } else {
        //console.log(result);
        //res.send(result)
        //writing json data into data.json
        // const resultString = JSON.stringify(result);
        // fs.writeFileSync('./public/data/input.json', resultString);
        // console.log('sucess');
        //const createCsvWriter = csvwriter.createObjectCsvWriter

        //Passing the column names intp the module
        // const csvWriter = createCsvWriter({
        //   path: './public/data/input.csv',
        //   header: [
        //     // Title of the columns (column_names)
        //     { id: '_id', title: 'ID' },
        //     { id: 'startDate', title: 'startDate' },
        //     { id: 'emailId', title: 'emailId' },
        //     { id: 'status', title: 'status' },
        //     { id: 'endDate', title: 'endDate' }
        //   ]
        // });
        // csvWriter.writeRecords(result)
        //   .then(() => {
        //     console.log('...Done');
        //   });
        const csv = parse(result, ["id", "startDate", "emailId", "status", "endDate"]);
        const transporter = nodemailer.createTransport({
          service: "hotmail",
          port: 587,
          auth: {
            user: "sachinkolhe719@outlook.com",
            pass: "A3skolhe@0585.",
          },
        });
        transporter.sendMail(
          {
            from: "sachinkolhe719@outlook.com",
            to: "sachinkolhe57@gmail.com",
            subject: "**IMPORTANT**RECORD**",
            text: "Please check the attachment for your reference! 😊",
            html: "<b>Ola! Please check the attachment for a surprise! 😊</b>",
            //here is the magic
            attachments: [
              {
                filename: "input.csv",
                content: csv,
              },
            ],
          },
          (err, info) => {
            if (err) {
              console.log("Error occurred. " + err.message);
              return process.exit(1);
            }
            console.log("Message sent: %s", info.messageId);
            // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            //res.send("Message sent: %s", info.messageId);
          }
        );
        res.send("<h2>Message sent:</h2>");
      }

    })
  }).catch((error) => {
    console.log(error);
  })

})
module.exports = router;
