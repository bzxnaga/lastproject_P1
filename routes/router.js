const routes = require('express').Router();
const RestaurantsController = require('../controllers/RestaurantsController')
// const controllerAuth = require('../controllers/authController')
// const ReviewController = require('../controllers/ReviewController')

// const cekLogin = function (req, res, next){
//   if(!req.session.user){
//     res.redirect(`/login`)
//   } else {
//     next()
//   }
// }

routes.get('/', RestaurantsController.findAll)

routes.get('/rest', RestaurantsController.findAll)


// routes.get('/register', (req,res) =>{
//   res.render('register', {err:req.query.err})
// })

// routes.post('/register', controllerAuth.register)
// routes.get('/login', (req, res) =>{
//   res.render ('login', {err:req.query.err})
// })
// routes.post('/login', controllerAuth.login)

// routes.get('/logout', (req, res) =>{
//   req.session.destroy(function (err){
//     console.log('ceklogout')
//     res.redirect('/Restaurants')
//   })
// })

// routes.get('/Restaurants/:id', cekLogin, controller.findOneWithReviews)

// routes.get('/Restaurants/:id/add-review', cekLogin, controller.addReview)
// routes.post('/Restaurants/:id/add-review', cekLogin, controller.addReviewPost)

// routes.get('/Restaurants/:id/edit-review', cekLogin, controller.editReview)

// routes.post('/reviews/:id/edit', cekLogin, ReviewController.editPost)
// routes.get('/reviews/:id/delete', cekLogin, ReviewController.delete)

module.exports = routes