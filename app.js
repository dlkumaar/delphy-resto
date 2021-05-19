const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const cookieParser = require('cookie-parser');

// // error handlers
// const AppError = require('./utils/appError');

// routes
const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');

// entry point to the app
const app = express();

// global middlewares
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// cors
app.use(cors());

// Serving static files
app.use('/', express.static('build'));

// hhtp headers
app.use(
	helmet.contentSecurityPolicy({
		useDefaults: true,
		directives: {
			'img-src': '*',
		},
	})
);

// body parser
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// cookie parser
app.use(cookieParser());

// compress response body
app.use(compression());

// mounting the routes
app.use('/api/v1/menu', menuRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/users', userRoutes);

// error handler
app.all('*', (req, res, next) => {
	res.status(404).json({
		status: 'failed',
		message: `Can't find the ${req.originalUrl} on this server!`,
	});

	const err = new Error(`Can't find the ${req.originalUrl} on this server!`);
	err.status = 'fail';
	err.statusCode = 404;
});

// export app
module.exports = app;
