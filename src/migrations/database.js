const { MongoClient } = require('mongodb');

let _db;

const mongoClient = (callBack) => {
    MongoClient.connect()
        .then((client) => {
            _db = client.db();
            callBack();
        })
        .catch((error) => {
            console.log(error);
            process.exit(1);
        });
};

const getDb = () => {
    if (!_db) {
        throw new Error("Database not available");
    }
    return _db;
};


module.exports = {
    mongoClient,
    getDb
};