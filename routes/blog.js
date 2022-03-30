const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')

const router = express.Router()

router.get('/', function (req, res) {
  res.render('home');
});


router.get('/blog',(req,res)=>{
  //res.sendFile(path.join(__dirname,'../views/blog.html'))
  res.render('blogHome',{
    blogs:blogs
  });
})


router.get('/blogpost/:slug',(req,res)=>{
  // blogs.forEach(e=>{
  //   console.log(e.title);
  // })
  myBlog = blogs.filter((e) => {
    return e.slug == req.params.slug
  })
  res.render('blogpage',{
    title:myBlog[0].title,
    content:myBlog[0].content
  });
  console.log(myBlog);

  //res.sendFile(path.join(__dirname,'../views/blogpage.html'))
})

module.exports = router