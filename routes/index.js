var jwt = require('jsonwebtoken'),
    mongodbHelper = require('../models/mongodbHelper');

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
};
