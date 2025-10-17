import type { HttpContext } from '@adonisjs/core/http'
import Service from "#models/service"

export default class ServicesController {
    public async index({ view, request } : HttpContext) {
        const search = request.input('search')
        let services

        if (search) {
            services = await Service.query()
                .where('name', 'like', `%${search}%`)
                .orWhere('description', 'like', `%${search}%`)
        } else {
            services = await Service.all()
        }

        return view.render('pages/user/services', { services, search })
    }

    public async indexAdmin({ view }: HttpContext) {
        const services = await Service.all()
        const sortedServices = services.sort((a, b) => a.id - b.id)
        return view.render('pages/admin/services/index', { sortedServices })
    }
        
    public async show({params, view}: HttpContext) {
        const service = await Service.findOrFail(params.id)
        await service.load('portfolios')
        return view.render('pages/user/service_detail', { service })
    }

    public async create({ view }: HttpContext) {
        return view.render('pages/admin/services/create')
    }

    public async store({ request, response, session }: HttpContext) {
        const data = request.only(['name', 'description', 'price', 'image_url', 'category'])
        
        await Service.create(data)
        session.flash('success', 'Service created successfully.')
        return response.redirect().toRoute('admin.services.index')
    }
        
    public async edit({ view, params }: HttpContext) {
        const service = await Service.findOrFail(params.id)
        return view.render('pages/admin/services/edit', { service })
    }

}