var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

router.post('/send', function (req,res, next) {
    var trasnporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'thisisme1985@gmail.com',
            pass: '************'
        }
    });
    var mailOptions = {
        from: 'Express Test<thisisme1985@gmail.com>',
        to: 'thisisme1985@gmail.com',
        subject: 'Website submission',
        text: 'You have a new submission with the following details...Name: '+req.body.name+' Email:'+req.body.email+' Message:'+req.body.message,
        html: '<p>You got a new submission with the following details..</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message '+req.body.message+'</li></ul>'
    };
    trasnporter.sendMail(mailOptions, function (error, info) {
        if(error) {
            console.log(error);
            res.redirect('/');
        } else {
            console.log('Message sent: '+info.response);
            res.redirect('/');
        }
    })
});

module.exports = router;
