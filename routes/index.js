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

    /**
     * add User
     */
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

    /**
     * login
     */
    app.post('/login', function (req, res, next) {
        var password = req.body.password;
        var filter = {userName: req.body.userName.trim()};
        mongodbHelper.getItemsByFilter(filter, 'Users', function (err, users) {
            var feekback = {
                message: '',
                status: false
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

            feekback.message = 'success login';
            feekback.status = true;
            var token = jwt.sign(user, 'shhhhh', {expiresInMinutes: 30});
            feekback.token = token;
            res.send(feekback);
            //res.send(feekback);
        });
    });

    /**
     * check token valid(not finish)
     */
    app.post('/checkToken', function (req, res, next) {

        var bearerHeader = req.headers['authorization'];
        console.log(bearerHeader);
        if (typeof bearerHeader !== 'undefined') {
            var bearer = bearerHeader.split(" ");
            var bearerToken = bearer[1];
            console.log(bearerToken);
            jwt.verify(bearerToken, 'shhhhh', function (err, decode) {
                if (err) {
                    res.send(401);
                }

                res.send({data: decode});
            });

        } else {
            res.send(403);
        }


    });
};
