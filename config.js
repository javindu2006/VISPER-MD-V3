const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'VISPER-MD&foYQ3YJQ#AAEKWnCjhLjRbIArQ_9t2f0CFu3-i5CBeAJKHrAn_Rc' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? 'lExssTdGBOmVJghAWsbSbawrWXTTpm3gB5n5' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'javindu2006' : process.env.SESSION_NAME, 

};

