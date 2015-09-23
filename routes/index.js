module.exports = function (app) {

    app.get('/test', function (req, res, next) {
        res.send({data: 'hi'});
    });
};
