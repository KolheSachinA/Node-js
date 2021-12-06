var express = require('express');
const connection = require('../util/connection');
var router = express.Router();
const jwt = require("jsonwebtoken");
const importAuthFun = require("../util/verifyAuth");
const moment = require('moment');


router.get('/attendance',(req,res,next) =>{
     
    importAuthFun.verifyJwtAuth(req.cookies.jwtToken.code).then((result) => {
        if (result === 'Verified Successfully') {
            const email = req.cookies.jwtToken.email
            console.log(email);
            res.render('attendance',{Email:email})
        }
    })
  })

router.post('/attendance',(req,res,next) =>{
    
    try {
        importAuthFun.verifyJwtAuth(req.cookies.jwtToken.code).then((result) => {
            if (result === 'Verified Successfully') {
                const email = req.cookies.jwtToken.email
                console.log(email);
                connection.query(`select * from attendance where username = '${email}'`,(error,result) =>{
                    if(error) return console.log(error);
                    else{
                        console.log('inside query');
                        console.log(result);
                        console.log(result[0].lastUpdatedTime);
                        
                        
                        const dateTimeFormatUpdate = 'YYYY-MM-DD HH:mm:ss';
                        const time = moment.utc().format(dateTimeFormatUpdate);
                        const date = moment(time);
                        const currentDay   = date.format('D');
                      

                       
                        
                        const dateFrmTable = moment(result[0].lastUpdatedTime);
                        const dayFrmTable  = dateFrmTable.format('D');
                        console.log(dayFrmTable);
                        if(dayFrmTable < currentDay){
                            const attendance = (result[0].attendanceCount)+1;
                            const presentDates = JSON.parse(result[0].presentDates);
                            const attendanceArray = presentDates.dates;
    
                            presentDates.dates = attendanceArray.push(time);
                            
                            connection.query(`update  attendance set attendanceCount =
                            ${attendance} , lastUpdatedTime = ${time} ,presentDates =${
                                JSON.stringify(presentDates)
                            } where username = ${email}`,(error,result)=>{
                                if(error) return console.log(error);
                                console.log('attendace updated!');
                                console.log(result);
                            });

                        }
                       
                    }
                    
                    
                })
    }
})
}catch(error){
    console.log(error);
}
})
        
        
    
  
  
  module.exports = router;