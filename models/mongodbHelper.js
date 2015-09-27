/**
 * Created by Jackey Li on 2015/9/27.
 */
var mongodb = require('mongodb'),
    BSON = require('mongodb').BSONPure,
    http = require('http'),
    poolModule = require('generic-pool'),
    setting = require('../settings');

var pool = poolModule.Pool({
    name: 'mongodb',
    create: function (callback) {
        var mongoServer = new mongodb.Server(setting.host, setting.port, {'auto_reconnect': false, poolSize: 1}),
            db = new mongodb.Db(setting.db, mongoServer, {w: -1});
        db.open(function (err, db) {
            if (err)return callback(err);
            callback(null, db);
        });
    },
    destroy: function (db) {
        db.close();
    },
    max: 10,//max Concurrent quantity
    idleTimeoutMillis: 30000,
    log: true
});

/**
 * basic class for find / add / update / delete item
 *
 * @constructor
 */
var ModelBasicClass = function () {
};

/**
 * add new item
 *
 * @param item
 * @param dataTableName
 * @param callback
 */
ModelBasicClass.addItem = function (item, dataTableName, callback) {
    console.log('1');
    pool.acquire(function (err, db) {
        if (err) {
        } else {
            db.collection(dataTableName).insertOne(
                item,
                {safe: true},
                function (err, newItems) {
                    if (err) {
                        pool.release(db);
                        return callback(err);
                    }
                    callback(null, newItems[0]);
                    pool.release(db);
                }
            );

        }
    });
};

/**
 * find one item by filter
 *
 * @param filter
 * @param dataTableName
 * @param callback
 */
ModelBasicClass.getItemByFilter = function (filter, dataTableName, callback) {

    pool.acquire(function (err, db) {
        if (err) {
            return callback(err);
        } else {
            db.collection(dataTableName).findOne(filter, function (err, menu) {
                callback(null, menu);
                pool.release(db);
            });
        }
    });

};

/**
 * find items by filter
 *
 * @param filter
 * @param dataTableName
 * @param callback
 */
ModelBasicClass.getItemsByFilter = function (filter, dataTableName, callback) {
    pool.acquire(function (err, db) {
        if (err) {
            return callback(err);
        } else {

            db.collection(dataTableName).find(filter).toArray(function (err, docs) {
                callback(null, docs);
                pool.release(db);
            });
        }
    });
};

/**
 * get all items
 *
 * @param dataTableName
 * @param callback
 */
ModelBasicClass.getAll = function (dataTableName, callback) {
    pool.acquire(function (err, db) {
        if (err) {
            return callback(err);
        } else {

            db.collection(dataTableName).find().toArray(function (err, docs) {
                callback(null, docs);
                pool.release(db);
            });
        }
    });
};

ModelBasicClass.getAllByPage = function (dataTableName, callback) {
    pool.acquire(function (err, db) {
        if (err) {
            return callback(err);
        } else {

            db.collection(dataTableName).find().sort({"insertDate": 1}).skip(10).limit(10).toArray(function (err, docs) {
                callback(null, docs);
                pool.release(db);
            });
        }
    });
};


/**
 * delete item by id
 *
 * @param Id
 * @param dataTableName
 * @param callback
 * @constructor
 */
ModelBasicClass.DeleteItemById = function (Id, dataTableName, callback) {
    if (!Id) {
        return;
    }
    Id = BSON.ObjectID.createFromHexString(Id);

    pool.acquire(function (err, db) {
        if (err) {
            return callback(err);
        } else {

            db.collection(dataTableName).remove({_id: Id}, function (err, result) {
                if (err) {
                    return callback(err);
                }
                callback(null, result);
                pool.release(db);
            });
        }
    });
};


ModelBasicClass.UpdateItem = function (record, dataTableName, callback) {

    pool.acquire(function (err, db) {
        if (err) {
            return callback(err);
        } else {

            db.collection(dataTableName).update(
                {_id: record._id},
                record,
                {upsert: true, multi: false},
                function (err, result) {

                    if (err) {
                        return callback(err);
                    }
                    callback(null, result);
                    pool.release(db);
                }
            );
        }
    });
};

module.exports = ModelBasicClass;
