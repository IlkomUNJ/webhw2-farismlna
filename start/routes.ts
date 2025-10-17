/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const ServicesController = () => import('#controllers/services_controller')
const FavoritesController = () => import('#controllers/favorites_controller')
const PortfolioController = () => import('#controllers/portfolios_controller')
const DashboardController = () => import('#controllers/dashboard_controller')

router.on('/login').render('pages/login').as('login')

router.group(() => {
    router.on('/').render('pages/user/home').as('home')
    router.get('/services', [ServicesController, 'index']).as('services')
    router.get('portfolios', [PortfolioController, 'index']).as('portfolios')
    router.on('/contact').render('pages/user/contact').as('contact')
    router.get('/favorite', [FavoritesController, 'index']).as('favorite')
}).prefix('/')

// router.on('/favorite').render('pages/user/favorite').as('favorite')

router.group(() => {
    router.get('/dashboard', [DashboardController, 'index']).as('admin.dashboard')

    //Services CRUD Routes
    router.get('/services', [ServicesController, 'indexAdmin']).as('admin.services.index')
    router.get('/services/create', [ServicesController, 'create']).as('admin.services.create')
    router.post('/services', [ServicesController, 'store']).as('admin.services.store')
    router.get('/services/:id/edit', [ServicesController, 'edit']).as('admin.services.edit')

    // Portfolios CRUD Routes
    router.get('/portfolios', [PortfolioController, 'indexAdmin']).as('admin.portfolios.index')
    router.get('/portfolios/create', [PortfolioController, 'create']).as('admin.portfolios.create')
    router.get('/portfolios/:id/edit', [PortfolioController, 'edit']).as('admin.portfolios.edit')

    // Favorites Routes
    router.get('/wishlist', [FavoritesController, 'indexAdmin']).as('admin.wishlist.index')
}).prefix('/admin')

