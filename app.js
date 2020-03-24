//use path module
const path = require('path');
//use express module
const express = require('express')
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
// const http = require('http');
// const axios = require('axios')
const app = express()

//set dynamic views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));

//set public folder as static folder for static file
app.use(express.static('public'));

// app.get('/', (req, res) => res.send('Hello Express!'))
// app.get('/',(req, res) => {
//     res.send('Welcome To Express');
// });

//route untuk halaman home
app.get('/',(req, res) => {

    // var promise1 = new Promise(function(resolve, reject) {
    //     resolve('Promise OK');
    // });

    // promise1.then(data => {
    //     console.log(data);
    // }).catch(error => {
    //     console.log(error)
    // })

    // const getBreeds = () => {
    //     try {
    //       return axios.get('https://api.kawalcorona.com/indonesia/provinsi/')
    //     } catch (error) {
    //       console.error(error)
    //     }
    // }

    // const countBreeds = async () => {
    //     const breeds = getBreeds()      
    //     // if (breeds) {
    //       return breeds
    //     // }
    // }
    // console.log( countBreeds() );

    res.render('index'); // render file index.hbs
    // res.render('index',{
    //     name : "M Fikri"
    // });
});

app.get('/global',(req, res) => {
    res.render('global');
});

//route untuk halaman home dengan parameter name
// app.get('/:name',(req, res) => {
//     //render file index.hbs
//     res.render('index',{
//       name : req.params.name
//     });
// });

//route untuk manampilkan form
// app.get('/post',(req, res) => {
//     //render file form.hbs
//     res.render('form');
// });
   
//route untuk submit form
// app.post('/post',(req, res) => {
//     //render file form.hbs
//     res.render('index',{
//       //ambil value dari textname
//       name : req.body.textname
//     });
// });

// app.get('/about', (req, res) => res.send('Express is Express'))
app.listen(3000, () => {
    console.log('Server is running at port 3000');
});