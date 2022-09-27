const { getDb } = require('../migrations/database');
const { ObjectId } = require('mongodb');

class User {
    constructor(name, username, email, password, id) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.id = id ? new ObjectId(id) : null;
    };


    save() {
        const db = getDb();
        return db.collection('user').insertOne(this);
    }

    static create(obj) {
        const db = getDb();
        return db.collection('user').insertOne(obj);
    }

    static findById(id) {
        const db = getDb();
        return db.collection('user').findOne({ _id: new ObjectId(id) }).next();
    }

    static findByEmail(email) {
        const db = getDb();
        return db.collection("user").findOne({ email }).next();
    }

    updateOne(obj) {
        const db = getDb();
        return db.collection('user').updateOne(this, obj);
    }

    static findByIdAndUpdate(id, obj) {
        const db = getDb();
        return db.collection('user').updateOne({ _id: new ObjectId(id) }, obj);
    }
};


module.exports = User;