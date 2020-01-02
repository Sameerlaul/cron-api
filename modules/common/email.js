const sql = require('../database/mysql')
const email = {

    getEmails: async (req, res, next) => {

        const request = new sql.Request();
        const emails= [];
        
        request.input('value', false)
            .query('select Email from AspNetUsers where EmailConfirmed = @value', function (err, recordset) {

                if (err) console.log(err)

                // emails = recordset.recordset;
                // console.log(emails);
                for(const record of recordset.recordset){
                    emails.push(record.Email)
                }
                req.emailss = emails;
               // console.log(emails);
                
                next();
            })

    }
}


module.exports = email















// const cron = require('node-cron')
// const express = require('express');
// const funct = require('./functions')
// const sql = require('../database/mysql')
// const fs = require('fs');
// const path = require('path')
// const router = express.Router();

// router.get('/', (req, res, next) => {


//     cron.schedule('*/1 * * * *', function () {
//         const request = new sql.Request();
//         const value = "True";
//         emails: String;

//         // var content = fs.readFileSync("./welcome.html");
//         // console.log(typeof content);

//         try {
//             var emailTemplate = fs.readFileSync(path.resolve('.', 'modules/emailtemplate/welcome.html'), 'utf-8').toString();
//         }
//         catch (error) {
//             console.log("eroor")
//         }


//         // query to the database and get the records
//         request.input('value', false)
//             .query('select Email from AspNetUsers where EmailConfirmed = @value', function (err, recordset) {

//                 if (err) console.log(err)

//                 emails = recordset.recordset;
//                 console.log(emails);

//                 // emails.forEach(email => {
//                 //     console.log("Sending to -- " + email.Email);

//                 //     funct.sendEmail(email.Email, 'test email', emailTemplate)
//                 // });

//             });
//     })


//     // fs.readFile('../modules/emailtemplate/welcome.html', function (error, pgResp) {
//     //     if (error) {
//     //       console.log("error from read file");

//     //     } else {
//     //        emailTemplate = pgResp
//     //     }


//     // });



// })


// module.exports = router



