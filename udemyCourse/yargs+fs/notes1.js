const fs = require('fs');
const addDetails = function(Username,Password){
        const Details = loadDetails();
        const duplicatDetails = Details.filter(function (detail) {
            return detail.Username === Username;
        })
        if (duplicatDetails.length === 0){
            Details.push({
                Username : Username,
                Password : Password
            });
            saveDetails(Details);
            console.log("details recorded!");
        }else{
                console.log("Username Taken!");
        }
      
       
}
const saveDetails = function(Details){

    const dataJSON = JSON.stringify(Details)
    fs.writeFileSync('notes1.json',dataJSON)
}

const loadDetails = function(){
    try {
        const dataBuffer = fs.readFileSync('notes1.json');
        const stringData = dataBuffer.toString();
        return JSON.parse(stringData);
    } catch (error) {
        return [];
    }
}
module.exports = {addDetails:addDetails}