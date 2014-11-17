var controllers = {
    channel: require('./controllers/channel')
};

exports.init = function(app) {
    app.get('/', function (req, res) {
        res.send('Hello World!')
    });

    app.post('/add_channel', controllers.channel.addChannel.bind(app));
};