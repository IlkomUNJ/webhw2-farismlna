/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/user/home').as('home')
router.on('/about').render('pages/user/about').as('about')
router.on('/contact').render('pages/user/contact').as('contact')
router.on('/portfolio').render('pages/user/portfolio').as('portfolio')
router.on('/services').render('pages/user/services').as('services')
router.on('/favorite').render('pages/user/favorite').as('favorite')
