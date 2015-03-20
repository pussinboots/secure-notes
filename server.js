'use strict';

var connect = require('connect');
var rest = require('connect-rest');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var url = require('url');
var port = Number(process.env.PORT || 9000);
var mongoURL = String(process.env.MONGOSOUP_URL || 'mongodb://127.0.0.1:27017/secure-notes');
/*connect().
    use(serveStatic(__dirname+'/public')).
    listen(port);*/

var server = connect()
.use(serveStatic(__dirname+'/public'))
.use( bodyParser.urlencoded( { extended: true } ) )
.use( bodyParser.json() );
var options = {
context: '/api',
logger:{ file: 'mochaTest.log', level: 'warn' },
discoverPath: 'discover',
protoPath: 'proto'
};

rest.get('/rest/notes', function (request, content, callback) {
	find(callback);
});

rest.post('/rest/notes', function (request, content, callback) {
	console.log( 'Received:' + request.parameters.format + ' ' + JSON.stringify(content) );
	insert(content);
	callback(null, 'ok');
});

function find(callback) {
	var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

  	MongoClient.connect(mongoURL, function(err, db) {
		if(err) {
			console.log(format("error = %s", err));
			callback(null, {error:format("%s", err)}, {headers:{'Content-Type':'application/json'}, statusCode: 500});
			return;
		}
		var collection = db.collection('notes');
		collection.find().sort({'_id':-1}).toArray(function(err, docs) {
			callback(null, {response:docs}, {headers:{'Content-Type':'application/json'}});
			db.close();
		}); 
	})
}


function insert(content) {
	var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

  	MongoClient.connect(mongoURL, function(err, db) {
		if(err) { 
			console.log(format("error = %s", err));
			callback(null, {error:format("%s", err)}, {headers:{'Content-Type':'application/json'}});
			return;
		}

		var collection = db.collection('notes');
		collection.insert(content, function(err, docs) {

		  collection.count(function(err, count) {
		    console.log(format("count = %s", count));
		  });

		  // Locate all the entries using find
		  collection.find().toArray(function(err, results) {
		    console.dir(results);
		    // Let's close the db
		    db.close();
		  });
		});
	})
}

server.use( rest.rester( options ) );
server.listen(port);