(function (module, require) {
    'use strict';

    var storage = function (configuration) {

        var database = configuration.database || {
                host: 'localhost',
                port: 6379,
                name: 'cfecc35e-821a-4a64-a301-a48e9e8f0f6a'
            };

        var options = {
            type: 'redis',
            host: database.host,
            port: database.port,
            db: 0,
            prefix: database.name,
            eventsCollectionName: 'events',
            snapshotsCollectionName: 'snapshots',
            timeout: 10000
        };

        if (database.secret !== null && database.secret !== undefined && database.secret !== '') {
            options.password = database.secret;
        }
        var eventStore = require('eventstore')(options);

        eventStore.init(function (error) {
            console.log(error);
        });

        return {
            Storage: eventStore
        };
    };

    module.exports = storage;

})(module, require);
