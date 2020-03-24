//use path module
const path = require('path');
//use express module
const express = require('express')
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
// const http = require('http');
// const agent = new http.Agent({ keepAlive: true });
// const https = require('https');
const axios = require('axios')
// const request = require('request');
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
    //     // resolve('Promise OK');
    //     https.get('https://api.kawalcorona.com/indonesia/provinsi/', (resp) => {
    //         // resolve(res.data)
    //         let data = '';
    //         // A chunk of data has been recieved.
    //         resp.on('data', (chunk) => {
    //             data += chunk;
    //         });
    //         // The whole response has been received. Print out the result.
    //         resp.on('end', () => {
    //             console.log(data);
    //             resolve(data)
    //         });
    //     }).on("error", (err) => {
    //         console.log("Error: " + err.message);
    //         reject(err)
    //     });
    // });

    // promise1.then(data => {
    //     console.log(data);
    //     res.render('index', {
    //         dataid: data
    //     }); // render file index.hbs
    // }).catch(error => {
    //     console.log(error)
    // });

    axios.get('https://api.kawalcorona.com/indonesia/provinsi/')
    .then(response => {
        // console.log(response.data);
        // response.data.forEach(el => {
            
        // });

        let sumConfirmed = response.data.map(o => o.attributes.Kasus_Posi).reduce((a, c) => { return a + c });
        let sumRecovered = response.data.map(o => o.attributes.Kasus_Semb).reduce((a, c) => { return a + c });
        let sumDeaths = response.data.map(o => o.attributes.Kasus_Meni).reduce((a, c) => { return a + c });

        res.render('demo', {
            dataid: response.data,
            sumConfirmed: sumConfirmed,
            sumRecovered: sumRecovered,
            sumDeaths: sumDeaths,
        }); // render file index.hbs
    })
    .catch(error => {
        console.log(error);
    });

    // res.render('index'); // render file index.hbs
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