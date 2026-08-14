require("dotenv").config()
const express = require('express')
const app = express()
const session = require('express-session')
const path = require('path')
const PORT = 3000
const pgSession = require('connect-pg-simple')(session)
const pool = require('./db/database')

const { Eta } = require('eta')
const view_path = path.join(__dirname,'views')
const blogRouter = require('./routes/blogs')
const userRouter = require('./routes/profile')
const authRouter = require('./routes/authentication')

const eta = new Eta({
  views: view_path,
  cache: false,
});


app.engine('eta', (filePath, options, callback) => {
    try {
        const template = path.relative(view_path, filePath);
        const rendered = eta.render(template, options);
        callback(null, rendered);
    } catch (err) {
        callback(err);
    }
});
app.use(session({
    store: new pgSession({
        pool: pool,
        tableName: 'session',
        createTableIfMissing: true
    }),
    secret: "super-secret-session-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        httpOnly: true,
        secure: false
    }
}))
app.set('views', view_path);
app.set('view engine', 'eta');

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('/public',express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'uploads'),{
    maxAge : '1d'
}))
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});
app.use('/',blogRouter)
app.use('/user_profile',userRouter)
app.use('/auth',authRouter)



app.listen(PORT ,() => {
    console.log(`server is listening at ${PORT}`)
})
 