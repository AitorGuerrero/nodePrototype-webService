exports.add = function(req, res) {
    var request = {
            name: req.param('name'),
            performer: req.param('performer')
        },
        Repository = require('nodePrototype-src/infrastructure/persistence/mongodb/PerformerRepository'),
        repository = new Repository(this.get('db')),
        Command = require('nodePrototype-src/commands/performer/create/SongCreateCommand'),
        command = new Command(repository);

    command.exec(request, function(err) {
        var code;
        code = err ? -1 : 0;
        res.json({code: code});
    });
}