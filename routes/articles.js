const express = require('express')
const Article = require('../models/articles')
const router = express.Router()


router.get('/:slug', async (req, res)=>{
  const article = await Article.findOne(req.params.slug)
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
  res.redirect(`/articles/${article.slug}`);
  } catch(e){
    res.render('articles/new', {article: article})
  }
  
})

router.delete('/id', async (req,res)=>{
  await Article.findByIdAndDelete(req.params.id);
  res.redirect('/');
})


module.exports = router