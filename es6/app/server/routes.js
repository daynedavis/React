module.exports = function(app) {
    app.get('/data', function response(req, res) {
        res.send('hello world');
    });
}
