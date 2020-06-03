
const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user-route');

var port =3000;
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended: true })) ;

app.get('/', (req,res)=>{
    res.render('index', {
        name: 'You',
        
    });
});

app.use('/users', userRoute);

app.listen(port, () =>{
    console.log('server listening on port '+ port);
});