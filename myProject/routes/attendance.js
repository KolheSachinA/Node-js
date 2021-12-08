var express = require('express');
const connection = require('../util/connection');
var router = express.Router();
const jwt = require("jsonwebtoken");
const importAuthFun = require("../util/verifyJwtToken");
const moment = require('moment');

router.get('/attendance', (req, res, next) => {
    importAuthFun.verifyJwtAuth(req.cookies.info.code).then((result) => {
        if (result === 'Verified Successfully') {
            const email = req.cookies.info.email
            console.log(email);
            res.render('attendance', { Email: email, msg: '' })
        }
    })
})

router.post('/attendance', (req, res, next) => {

    try {
        importAuthFun.verifyJwtAuth(req.cookies.info.code).then((result) => {
            if (result === 'Verified Successfully') {
                const email = req.cookies.info.email
                console.log(email);
                connection.query(`select * from attendance where email = '${email}'`, (error, result) => {
                    if (error) return console.log(error);
                    else {
                        console.log('inside query');
                        const dateTimeFormatUpdate = 'YYYY-MM-DD HH:mm:ss';
                        const time = moment.utc().format(dateTimeFormatUpdate);
                        const date = moment(time);
                        const currentDay = date.format('D');
                        //07-12-2021
                        const dateFrmTable = moment(result[0].lastUpdatedTime);
                        const dayFrmTable = dateFrmTable.format('D');
                        //console.log(dayFrmTable);
                        if (dayFrmTable < currentDay || result[0].attendanceCount === 0) {

                            const attendance = (result[0].attendanceCount) + 1;
                            const presentDates = JSON.parse(result[0].presentDates);
                            const attendanceArray = presentDates.dates;
                            attendanceArray.push(time);
                            presentDates.dates = attendanceArray;

                            connection.query(`update  attendance set attendanceCount =
                            ${attendance} , lastUpdatedTime = '${time}' ,presentDates ='${JSON.stringify(presentDates)
                                }' where email = '${email}'`, (error, result) => {
                                    if (error) return console.log(error);

                                    console.log('attendace updated!');
                                    console.log('result', result.changedRows);
                                    //res.send('sucuessfully updated!!!!!')
                                    res.render('attendance', { msg: 'success' })
                                });
                        } else {
                            res.render('attendance', { msg: 'failure' })
                        }
                    }
                })
            }
        })
    } catch (error) {
        console.log(error);
        res.render('school');
    }
})

module.exports = router;