var app = require('express')(),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

require('./controllers').init(app);

require('./db').init(function(err, db) {
    app.set('db', db);
    var server = app.listen(3000, function () {
        var host = server.address().address,
            port = server.address().port;
        console.log('Example app listening at http://%s:%s', host, port)
    });
});

