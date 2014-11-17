exports.addChannel = function(req, res) {
    var request = {name: req.body.name},
        repository = require('nodePrototype-src/infrastructure/persistence/mongodb/PerformerRepository')
            .New(this.get('db')),
        command = require('nodePrototype-src/commands/performer/create/PerformerCreateCommand')
            .New(repository);

    command.exec(request, function(err) {
        res.json({code: 0});
    });
}