import Favorite from '#models/favorite'
import Service from '#models/service'
import type { HttpContext } from '@adonisjs/core/http'

export default class FavoritesController {
    public async index({ view } : HttpContext) {
        const services = await Service.all()
        return view.render('pages/user/favorite', { services })
    }

    public async indexAdmin({ view }: HttpContext) {
        const wishlist = await Favorite.all()
        return view.render('pages/admin/wishlist/index', { wishlist })
    }

    public async show({ view, params } : HttpContext) {
        const service = await Service.findOrFail(params.id)
        return view.render('pages/service_detail', { service })
    }

    public async add({auth, params, response} : HttpContext) {
        const user = auth.user
        const serviceId = params.serviceId
        
        // Check if the service exists
        const serviceExist = await Service.query().where('user_id', user!.id).andWhere('id', serviceId).first()

        if (!serviceExist) {
            await Favorite.create({ userId: user!.id, serviceId })
        }

        return response.redirect().back()
    }

    public async remove({auth, params, response} : HttpContext) {
        const user = auth.user
        const serviceId = params.serviceId
        
        await Favorite.query().where('user_id', user!.id).andWhere('service_id', serviceId).delete()

        return response.redirect().back()
    }
}