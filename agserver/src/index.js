import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import mongoose from 'mongoose';

import main from './routes/main';
import auth from './routes/auth';
import users from './routes/users';
import events from './routes/events';

const app = express();
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 8080;
const db_address = 'localhost:27017/eventster';

// Log requests to the console
app.use(morgan('dev'));

// Configure body parser - Let us pull POST content from HTTP request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB connection
mongoose.connection.on('open', () => {
	return console.log('Connected to mongo server!');
});

mongoose.connection.on('error', err => {
	console.log('Could not connect to mongo server!');
	return console.log(err.message);
});

try {
	mongoose.connect('mongodb://' + db_address);
	const db = mongoose.connection;

	console.log('Started connection on ' + ('mongodb://' + db_address) + ', waiting for it to open...');
} catch (err) {
	console.log(('Setting up failed to connect to ' + db_address), err.message);
}

// REGISTER ROUTES
app.use('/api', main);
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/events', events);

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
