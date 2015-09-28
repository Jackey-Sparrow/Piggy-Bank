var jwt = require('jsonwebtoken'),
    mongodbHelper = require('../models/mongodbHelper'),
    crypto = require('crypto');

module.exports = function (app) {

    app.get('/test', function (req, res, next) {

        var user = {
            userName: 'jackey',
            password: '123'
        };

        //add new comment
        mongodbHelper.addItem(user, 'Users', function (err, newUser) {
            if (err) {
                console.log('add new user error');
            } else {
                console.log(newUser);
            }
            //return res.redirect('/submit/' + comment.menuId);
        });
        var token = jwt.sign({userName: 'Jackey', password: 'affadsas'}, 'shhhhh', {expiresInMinutes: 30});
        res.send(token);
    });

    app.post('/addUser', function (req, res, next) {

        var userName = req.body.userName,
            password = req.body.password;

        //md5 = crypto.createHash('md5');
        //console.log(md5);
        //md5.update(password);

        var cryptoPassword = password;//md5.digestPassword('hex');

        var user = {
            userName: userName,
            password: cryptoPassword
        };
        mongodbHelper.addItem(user, 'Users', function (err, newUser) {
            if (err) {
                console.log('add new user error');
            } else {
                console.log('new user:');
                console.log(newUser);
                var token = jwt.sign(newUser, 'shhhhh', {expiresInMinutes: 30});
                res.send(token);
            }
            //return res.redirect('/submit/' + comment.menuId);
        });

    });
};
