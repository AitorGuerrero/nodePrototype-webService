exports.addChannel = function(req, res) {
    var request = {name: req.body.name},
        repository = require('nodePrototype-src/infrastructure/persistence/mongodb/ChannelRepository')
            .New(this.get('db')),
        Command = require('nodePrototype-src/commands/channel/create/ChannelCreateCommand'),
        command = new Command(repository);

    command.exec(request, function(err) {
        res.json({code: 0});
    });
}