exports.add = function(req, res) {
    var request = {name: req.param('name')},
        Repository = require('nodePrototype-src/infrastructure/persistence/mongodb/PerformerRepository'),
        repository = new Repository(this.get('db')),
        Command = require('nodePrototype-src/commands/performer/create/PerformerCreateCommand'),
        command = new Command(repository);

    command.exec(request, function(err) {
        var code;
        code = err ? -1 : 0;
        res.json({code: code});
    });
}