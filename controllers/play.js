exports.add = function(req, res) {
    var request = {
            title: req.body.title,
            performer: req.body.performer,
            start: new Date(req.body.start),
            end: new Date(req.body.end),
            channel: req.body.channel
        },
        repository = require('nodePrototype-src/infrastructure/persistence/mongodb/PlayRepository')
            .New(this.get('db')),
        Command = require('nodePrototype-src/commands/song/addPlay/SongAddPlayCommand'),
        command = new Command(repository);

    command.exec(request, function(err) {
        var output;
        if(err) {
            output = {code: -1};
        } else {
            output = {code: 0};
        }
        res.json(output);
    });
}

exports.getSongPlays = function(req, res) {
    var request = {
            title: req.body.title,
            performer: req.body.performer,
            start: new Date(req.body.start),
            end: new Date(req.body.end)
        },
        repository = require('nodePrototype-src/infrastructure/persistence/mongodb/PlayRepository')
            .New(this.get('db')),
        Request = require('nodePrototype-src/querys/play/GetSongPlaysQuery'),
        request = new Request(repository);

    command.exec(request, function(err, response) {
        var output = {};
        if(err) {
            output = {code: -1, message: err};
        } else {
            output = {
                code: 0,
                result: response
            };
        }
        res.json(output);
    });
};

exports.getChannelPlays = function(req, res) {
    var request = {
            start: new Date(req.body.start),
            end: new Date(req.body.end)
        },
        repository = require('nodePrototype-src/infrastructure/persistence/mongodb/PlayRepository')
            .New(this.get('db')),
        Request = require('nodePrototype-src/querys/play/GetChannelPlaysQuery'),
        request = new Request(repository);

    command.exec(request, function(err, response) {
        var output = {};
        if(err) {
            output = {code: -1, message: err};
        } else {
            output = {
                code: 0,
                result: response
            };
        }
        res.json(output);
    });
};