exports.add = function(req, res) {
    var request = {name: req.body.name},
        repository = require('nodePrototype-src/infrastructure/persistence/mongodb/PerformerRepository')
            .New(this.get('db')),
        Command = require('nodePrototype-src/commands/performer/create/PerformerCreateCommand'),
        command = new Command(repository);

    command.exec(request, function(err) {
        res.json({code: 0});
    });
}