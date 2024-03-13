const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoURI = 'mongodb://localhost:27017/blog';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB database');
    // Start the Express server
    app.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use('/articles', require('./routes/articles'))

app.get('/', (req, res) => {
  const articles = [{
    title: 'Test Article',
    createdAt: new Date(),
    description: 'Test description'
  },{
    title: 'Test Article',
    createdAt: new Date(),
    description: 'Test description'
  }]
  res.render('articles/index', {articles: articles});
});

