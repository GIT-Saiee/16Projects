
import  fs from 'node:fs';
// var moment = require("moment");
// var mydate = new Date();
// var myCoolDate = moment(mydate).format();
// console.log(myCoolDate);


// reading a JSON file asynchronously
fs.readFile("user.json", (error, data) => {
    // if the reading process failed,
    // throwing the error
    if (error) {
      // logging the error
      console.error(error);
  
      throw err;
    }
  
    // parsing the JSON object
    // to convert it to a JavaScript object
    const user = JSON.parse(data);
  
    // printing the JavaScript object
    // retrieved from the JSON file
    console.log(user);
  });