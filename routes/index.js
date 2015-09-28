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
                res.send({
                    data: 'addUserFail',
                    message: ''
                });
            } else {

                var token = jwt.sign(newUser, 'shhhhh', {expiresInMinutes: 30});
                res.send(token);
            }
        });

    });

    app.post('/login', function (req, res, next) {
        var password = req.body.password;
        var filter = {userName: req.body.userName.trim()};
        mongodbHelper.getItemsByFilter(filter, 'Users', function (err, users) {
            var feekback = {
                message: ''
            };
            if (!users.length) {
                feekback.message = 'no user existed';
                res.send(feekback);
                return;
            }

            var user = users[0];

            if (user.password.toString().trim() != password.toString().trim()) {
                feekback.message = 'password wrong';
                res.send(feekback);
                return;
            }

            //feekback.message = 'success login';
            var token = jwt.sign(user, 'shhhhh', {expiresInMinutes: 30});
            res.send(token);
            //res.send(feekback);
        });
    });

    app.post('/checkToken', function (req, res, next) {
        console.log(req.headers);
        var bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            var bearer = bearerHeader.split(" ");
            bearerToken = bearer[1];
            //req.token = bearerToken;
            var decoded = jwt.verify(bearerToken, 'shhhhh');
            console.log(decoded)
            res.send({data: 'hello world'});
            next();
        } else {
            res.send(403);
        }


    });
};
