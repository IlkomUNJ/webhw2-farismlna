import type { HttpContext } from '@adonisjs/core/http'
import Portfolio from "#models/portfolio"
import Service from '#models/service'

export default class PortfoliosController {
    public async index({ view, request}: HttpContext) {
        const categoryId = request.input('category')
        const services = await Service.all()
        let portfoliosQuery = Portfolio.query().preload('service')

        if (categoryId && categoryId !== 'all') {
            portfoliosQuery = portfoliosQuery.where('service_id', categoryId)
        }

        const portfolios = await portfoliosQuery
        
        return view.render('pages/user/portfolio', { portfolios, services, selectedCategory: categoryId || 'all' }) 
    }

    public async indexAdmin({ view }: HttpContext) {
        const portfolio = await Portfolio.all()
        return view.render('pages/admin/portfolios/index', { portfolio })
    }

    public async create({ view }: HttpContext) {
        return view.render('pages/admin/portfolios/create')
    }
        
    public async edit({ view, params }: HttpContext) {
        const portfolio = await Portfolio.findOrFail(params.id)
        return view.render('pages/admin/portfolios/edit', { portfolio })
    }
}