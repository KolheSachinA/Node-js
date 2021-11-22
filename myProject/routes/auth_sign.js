var express = require('express');
var router = express.Router();
const mongoConnection = require('../utils/connection').connectionObject;

router.post('/auth_sign', function (req, res, next) {

    mongoConnection.then(async (client) => {
        const dbName = 'schoolDb'
        clientConn = client;
        const db = client.db(dbName);
        const collection = db.collection('student3');
        //reading data from user
        const fname = req.body.fname
        const lname = req.body.lname
        const address = req.body.address
        const gender = req.body.gender
        const email = req.body.email
        const mobile = req.body.mobile
        const course = req.body.course
        try {
            //inserting to db
            const insertDocs = await collection.insertOne({
                firstName: fname,
                lastName: lname,
                address: address,
                gender: gender,
                emailId: email,
                mobileNo: mobile,
                course: course,
            })
            res.send(`<h1>${fname}Your Data inserted successfully!</h1>`)
        } catch (e) {
            console.log('failed to insert data!');
            res.send('<h1>Failed to insert data')
        }
    })

})

module.exports = router