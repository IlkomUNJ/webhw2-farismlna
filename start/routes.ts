/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const ServicesController = () => import('#controllers/services_controller')
const FavoritesController = () => import('#controllers/favorites_controller')
const PortfolioController = () => import('#controllers/portfolios_controller')
const DashboardController = () => import('#controllers/dashboard_controller')
const AuthController = () => import('#controllers/auth_controller')

router.get('/admin/login', [AuthController, 'showLogin']).as('admin.login')
router.post('/admin/login', [AuthController, 'login']).as('admin.login.post')
router.post('/admin/logout', [AuthController, 'logout']).as('admin.logout')

router.group(() => {
    router.on('/').render('pages/user/home').as('home')
    router.get('/services', [ServicesController, 'index']).as('services')
    router.get('/portfolios', [PortfolioController, 'index']).as('portfolios')
    router.on('/contact').render('pages/user/contact').as('contact')
    router.on('/favorite').render('pages/user/favorite').as('favorite')
})

router.group(() => {
    router.get('/dashboard', [DashboardController, 'index']).as('admin.dashboard')

    //Services CRUD Routes
    router.get('/services', [ServicesController, 'indexAdmin']).as('admin.services.index')
    router.get('/services/create', [ServicesController, 'create']).as('admin.services.create')
    router.post('/services', [ServicesController, 'store']).as('admin.services.store')
    router.get('/services/:id/edit', [ServicesController, 'edit']).as('admin.services.edit')
    router.post('/services/:id', [ServicesController, 'update']).as('admin.services.update')
    router.post('/services/:id/delete', [ServicesController, 'destroy']).as('admin.services.destroy')

    // Portfolios CRUD Routes
    router.get('/portfolios', [PortfolioController, 'indexAdmin']).as('admin.portfolios.index')
    router.get('/portfolios/create', [PortfolioController, 'create']).as('admin.portfolios.create')
    router.post('/portfolios', [PortfolioController, 'store']).as('admin.portfolios.store')
    router.get('/portfolios/:id/edit', [PortfolioController, 'edit']).as('admin.portfolios.edit')
    router.post('/portfolios/:id', [PortfolioController, 'update']).as('admin.portfolios.update')
    router.post('/portfolios/:id/delete', [PortfolioController, 'destroy']).as('admin.portfolios.destroy')

}).prefix('/admin').middleware([middleware.adminAuth()])

router.post('/wishlist', [FavoritesController, 'toggle']).as('wishlist.toggle')
router.get('/admin/wishlists', [FavoritesController, 'indexAdmin']).as('admin.wishlist.index')
