exports.add = function(req, res) {
    var request = {
            title: req.param('title'),
            performer: req.param('performer'),
            start: new Date(req.param('start')),
            end: new Date(req.param('end')),
            channel: req.param('channel')
        },
        Repository = require('nodePrototype-src/infrastructure/persistence/mongodb/PlayRepository'),
        repository = new Repository(this.get('db')),
        Command = require('nodePrototype-src/commands/song/addPlay/SongAddPlayCommand'),
        command = new Command(repository);

    command.exec(request, function(err) {
        var code;
        code = err ? -1 : 0;
        res.json({code: code});
    });
}

exports.getSongPlays = function(req, res) {
    var request = {
            title: req.param('title'),
            performer: req.param('performer'),
            start: new Date(req.param('start')),
            end: new Date(req.param('end'))
        },
        Repository = require('nodePrototype-src/infrastructure/persistence/mongodb/PlayRepository'),
        repository = new Repository(this.get('db')),
        Query = require('nodePrototype-src/querys/play/GetSongPlaysQuery'),
        query = new Query(repository);

    query.exec(request, function(err, response) {
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
            start: new Date(req.param('start')),
            end: new Date(req.param('end'))
        },
        Repository = require('nodePrototype-src/infrastructure/persistence/mongodb/PlayRepository'),
        repository = new Repository(this.get('db')),
        Query = require('nodePrototype-src/querys/play/GetChannelPlaysQuery'),
        query = new Query(repository);

    query.exec(request, function(err, response) {
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

exports.getTop = function(req, res) {
    var request = {
            channels: req.param('channel'),
            start: new Date(req.param('start')),
            end: new Date(req.param('end')),
            limit: req.param('limit')
        },
        Repository = require('nodePrototype-src/infrastructure/persistence/mongodb/PlayRepository'),
        repository = new Repository(this.get('db')),
        Query = require('nodePrototype-src/querys/song/GetTopQuery'),
        query = new Query(repository);

    query.exec(request, function(err, response) {
        var parsedResults = [];
        for(var i = 0; i < response.length; i++) {
            parsedResults.push({
                performer: response[i].performer,
                title: response[i].title,
                plays: response[i].playsAmount,
                previous_plays: response[i].previousPlaysAmount,
                rank: response[i].rank,
                previous_rank: response[i].previousRank
            });
        }
        var output = {};
        if(err) {
            output = {code: -1, message: err};
        } else {
            output = {
                code: 0,
                result: parsedResults
            };
        }
        res.json(output);
    });
};