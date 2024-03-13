const express = require('express')
const Article = require('../models/articles')
const router = express.Router()


router.get('/:id', async (req, res)=>{
  const article = await Article.findById(re.params.id)
  if(!article){
    res.redirect('/')
  }
  res.render('articles/show', { article: article})
})


router.post('/', async (req, res)=>{
  try{
    const {title, description, markdown} = req.body;
    const article = await Article.create({
    title, description, markdown
  })
  res.redirect(`/articles/${article.id}`);
  } catch(e){
    res.render('articles/new', {article: article})
  }
  
})



module.exports = router