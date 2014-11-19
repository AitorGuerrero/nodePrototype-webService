var controllers = {
    channel: require('./controllers/channel'),
    performer: require('./controllers/performer'),
    song: require('./controllers/song'),
    play: require('./controllers/play')
};

exports.init = function(app) {
    app.get('/', function (req, res) {
        res.send('Hello World!')
    });

    app.post('/add_channel', controllers.channel.add.bind(app));
    app.post('/add_performer', controllers.performer.add.bind(app));
    app.post('/add_song', controllers.song.add.bind(app));
    app.post('/add_play', controllers.play.add.bind(app));
};
    app.get('/get_song_plays', controllers.play.getSongPlays.bind(app));
    app.get('/get_channel_plays', controllers.play.getChannelPlays.bind(app));
