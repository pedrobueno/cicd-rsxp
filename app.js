var express = require('express')
var app = express

app.get('/', (req, res) => ({ msg: 'asdfasdf' }))

app.listen(3000, () => console.log('Ouvindo porta 30000'))
