var config = {
        url: '127.0.0.1',
        port: '27017',
        dbName: 'nodePrototype'
    };
exports.init = function(cb) {
    require('mongodb')
        .MongoClient
        .connect('mongodb://' + config.url + ':' + config.port + '/' + config.dbName, cb);
};