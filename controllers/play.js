exports.addChannel = function(req, res) {
    var request = {
            title: req.body.title,
            performer: req.body.performer,
            start: req.body.start,
            end: req.body.end,
            channel: req.body.channel
        },
        repository = require('nodePrototype-src/infrastructure/persistence/mongodb/PlayRepository')
            .New(this.get('db')),
        command = require('nodePrototype-src/commands/song/addPlay/SongAddPlayCommand')
            .New(repository);

    command.exec(request, function(err) {
        res.json({code: 0});
    });
}