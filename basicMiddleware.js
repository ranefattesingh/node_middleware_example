const express = require('express')

const app = express()

const requestTime = function (req, res, next) {
	req.requestTime = Date.now()
	next()
}

app.use(requestTime)

app.get('/', requestTime, (req, res) => {
	let responseText = 'Hello World!<br>'
	responseText += '<small>Requested at: ' + req.requestTime + '</small>'
	res.send(responseText)
})

app.get('/someother', (req, res) => {
	res.send('Non Middleware route');
})

app.listen(3000, () => console.log('server started!'))
