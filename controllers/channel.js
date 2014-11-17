exports.addChannel = function(req, res) {
    var request = {name: req.body.name},
        repository = require('nodePrototype-src/infrastructure/persistence/mongodb/ChannelRepository')
            .New(this.get('db')),
        command = require('nodePrototype-src/commands/channel/create/ChannelCreateCommand')
            .New(repository);

    command.exec(request, function(err) {
        res.json({code: 0});
    });
}