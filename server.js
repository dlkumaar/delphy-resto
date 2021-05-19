const dotenv = require('dotenv').config({ path: './config.env' });

const app = require('./app');

// connect to database

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server listening at PORT: ${PORT}`);
});

// module.exports = { pool };
