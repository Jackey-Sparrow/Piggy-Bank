var jwt = require('jsonwebtoken');

module.exports = function (app) {

    app.get('/test', function (req, res, next) {
        var token = jwt.sign({userName: 'Jackey', password: 'affadsas'}, 'shhhhh', {expiresInMinutes: 30});
        res.send(token);
    });
};
