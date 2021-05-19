const jwt = require('jsonwebtoken');
const User = require('./../model/userModel');

const signToken = (id) => {
	return jwt.sign({ id: id }, process.env.PRIVATE_KEY, {
		expiresIn: '30 days',
	});
};

exports.signUp = async (req, res) => {
	// create new user
	const newUser = await User.create({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		telephone: req.body.telephone,
		address: req.body.address,
		admin: req.body.admin,
		password: req.body.password,
	});

	// generate secure token
	const token = signToken(newUser.id);

	// send email to user
	// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	// const msg = {
	// 	to: `${req.body.email}`, // Change to your recipient
	// 	from: process.env.email, // Change to your verified sender
	// 	subject: 'Email subject',
	// 	text: 'Email Body',
	// 	html: '<strong>HTML content - optional</strong>',
	// };

	// sgMail
	// 	.send(msg)
	// 	.then(() => {heroku log
	// 		console.log('Email sent');
	// 	})
	// 	.catch((error) => {
	// 		console.error(error);
	// 	});

	res.status(201).json({
		message: 'User created',
		token,
		newUser,
	});
};

exports.login = async (req, res) => {
	const { email, password } = await req.body;

	// 1. check email and password exists
	if (!email && !password) {
		return res.json({ error: 'Authentication fail' });
	}

	// 2. check for user in the database & password is correct
	const user = await User.findOne({
		where: {
			email: email,
		},
	});

	// compare password
	const match = await user.correctPassword(password, user.password);

	// 3. if everything ok, send token to client
	if (!match) {
		res.status(404).json({ message: 'Incorrect password or email!' });
	} else {
		const token = signToken(user.id);
		res.json({
			token,
			message: 'success',
		});
	}
};

exports.protect = async (req, res, next) => {
	let token;
	// get token
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		token = await req.headers.authorization.split(' ')[1];
		// console.log(token);
	}

	// send error if no token
	if (!token) {
		return res
			.status(401)
			.json('You are not logged in. Please log in to get access!');
	}
	// validate token
	let decoded;
	try {
		decoded = await promisify(jwt.verify)(token, 'privateKey');
	} catch (error) {
		return res.status(401).json({
			error: `${error.name}`,
			message: `${error.message}. Please log in!`,
		});
	}

	// console.log( decoded );

	// if validation passes check for user in the database
	const user = await User.findOne({
		where: {
			id: decoded.id,
		},
	});

	if (!user) {
		return res
			.status(401)
			.json({ error: 'The user with the token does not exist!' });
	}

	next();
};
