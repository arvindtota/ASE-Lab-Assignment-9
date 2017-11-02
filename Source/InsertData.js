
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://root:secure@ds147167.mlab.com:47167/arvind';
var insertDocument = function(db, callback) {
    db.collection('demoase').insertOne( {
        "Enterplace" : "kansas city",
        "Enterfood" : "pizza",
        "venue": "Arvind's Pizza",
        },
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the foursquare collection.");
        callback();
    });
};
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
        db.close();
    });
});