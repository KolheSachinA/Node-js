const jwt = require('jsonwebtoken');

const verifyJwtAuthAdmin = (token) => {
    return new Promise((resolve, reject) => {
        const secret = 'asd123@#$^';
        jwt.verify(token, secret, function(err, decoded) { // step -5 verifying token
            if (err) {
              reject('Verification Failed');
            } else {
                console.log(decoded.user) // bar
                if (decoded.user === 'sak') {
                    console.log('Token verified succesfully');
                    resolve('Verified Successfully');
                }
            }
        });
    })
}

exports.verifyJwtAuthAdmin = verifyJwtAuthAdmin;