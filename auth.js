const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
	try {
		console.log(req.body)
		if(req.body.username == 'testuser') next()
		throw 'invalid user'
	} catch (err) {
		res.status(401).json(err)
	}
}
