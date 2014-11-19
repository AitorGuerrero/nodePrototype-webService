exports.add = function(req, res) {
    var request = {
            name: req.body.name,
            performer: req.body.performer
        },
        repository = require('nodePrototype-src/infrastructure/persistence/mongodb/PerformerRepository')
            .New(this.get('db')),
        Command = require('nodePrototype-src/commands/performer/create/SongCreateCommand'),
        command = new Command(repository);

    command.exec(request, function(err) {
        res.json({code: 0});
    });
}