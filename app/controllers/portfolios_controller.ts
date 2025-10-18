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
        const sortedPortfolios = await Portfolio.query().preload('service').orderBy('id', 'asc')
        return view.render('pages/admin/portfolios/index', { sortedPortfolios })
    }

    public async create({ view }: HttpContext) {
        const services = await Service.query().orderBy('id', 'asc')
        return view.render('pages/admin/portfolios/create', { services })
    }

    public async store({ request, response, session }: HttpContext) {
        const data = request.only(['title', 'description', 'image_url', 'service_id'])
        
        await Portfolio.create(data)
        session.flash('success', 'Portfolio created successfully.')
        return response.redirect().toRoute('admin.portfolios.index')
    }
        
    public async edit({ view, params }: HttpContext) {
        const portfolio = await Portfolio.findOrFail(params.id)
        const services = await Service.query().orderBy('id', 'asc')
        return view.render('pages/admin/portfolios/edit', { portfolio, services})
    }

    public async update({ request, params, response, session }: HttpContext) {
        const portfolio = await Portfolio.findOrFail(params.id)

        const data = request.only(['title', 'description', 'image_url', 'service_id'])

        portfolio.merge(data)
        await portfolio.save()

        session.flash('success', 'Portfolio updated successfully.')
        return response.redirect().toRoute('admin.portfolios.index')
    }

    public async destroy({ params, response, session }: HttpContext) {
        const portfolio = await Portfolio.findOrFail(params.id)
        await portfolio.delete()

        session.flash('success', 'Portfolio deleted successfully.')
        return response.redirect().toRoute('admin.portfolios.index')
    }
}