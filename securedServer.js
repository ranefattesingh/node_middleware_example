const express = require('express')
const app = express()

console.log('curl -X GET -H \'Content-Type: application/json\' -d localhost:3000')
console.log('curl -X GET -H \'Content-Type: application/json\' -d \'{"username": "testuser"}\' localhost:3000/secured')


app.use(express.json())

const auth = require('./auth')

app.get('/secured', auth, (req, res) => {
	res.send('You are verified')
})

app.get('/', (req, res) => {
	res.send('Test pass')
})

app.listen(3000, () => console.log('Server started'))
