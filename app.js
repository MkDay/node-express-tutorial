const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');


// --express app

const app = express();


// --connect to mongodb

const dbURI = 'mongodb+srv://MkDay:kpWco2a4eSmv4VIC@cluster0.imtvyn9.mongodb.net/node-tuts?retryWrites=true&w=majority';


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('connected to database...');

        // --listen to requests
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });
    

// --register EJS

app.set('view engine', 'ejs');
app.set('views', 'ejs_views');


// --middleware
/*
app.use((req, res, next) => {
    console.log('new request made')
    console.log(req.method);
    console.log(req.hostname);
    console.log(req.path);
    next();
});

app.use((req, res, next) => {
    console.log('in the next middleware');
    next();
});

*/

// --morgan -3rd party middleware

// app.use(morgan('dev'));

/* GET / 200 58.254 ms - 3351
GET /favicon.ico 404 9.896 ms - 2827 */

// app.use(morgan('tiny'));

/* GET / 304 - - 40.410 ms */

// --middleware - express static files

app.use(express.static('public'));

// --middleware - to attach requested data into Request object

app.use(express.urlencoded({ extended: true }));


// --mongo & mongoose sandbox routes--
    // create instance of 'Blog' constructor function to save data into db
    // use constructor function directly to retrieve data from db


// --save new blogs to db

//app.get('/add-blogs', (req, res) => {

    /*
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'this is my new blog'
    });
    */

   // save 2nd blog as the same way
    /*
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog 2',
        body: 'this is my new blog 2'
    });
    */

    /*
    blog.save()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
    */
//}); 

// --find() - to get all the blogs
/*
app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
});
*/

// --findById() - to get a single blog by using its id
/*
app.get('/single-blog', (req, res) => {
    Blog.findById('62d5bfc88bc077821a2970a5')
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
});
*/

// --EJS render

app.get('/', (req, res) => {

    /*
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet, consectetur'}, 
        {title: 'Mario finds stars', snippet: 'Duis tristique sollicitudin nibh sit amet'}, 
        {title: 'How to defeat browser', snippet: 'Scelerisque mauris pellentesque pulvinar'}
    ];
    res.render('index', {title: 'Home', blogs});
    */
   res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

// --blogs routes

app.use('/blogs', blogRoutes);



app.use((req, res) => {
    res.status(404).render('404', {title: '404 page'});
});

// --write simple content into web page
/*
    // --get request - from root url

app.get('/', (req, res) => {
    res.send('<p>Express home page</p>');
});

    // --get request - from /about url

app.get('/about', (req, res) => {
    res.send('<p>Express about page</p>')
});
*/

// --send html files

    // --get request - from root
/*
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname} );
});

    // --get request - from /about

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname} );
});

// --redirects

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// --404 pages

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname} );
});
    
*/