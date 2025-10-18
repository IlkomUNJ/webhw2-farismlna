import Favorite from '#models/favorite'
import Service from '#models/service'
import type { HttpContext } from '@adonisjs/core/http'

export default class FavoritesController {
//     public async index({ view }: HttpContext) {
//     const wishlists = await Favorite.query().preload('service')
//     return view.render('pages/admin/wishlist/index', { wishlists })
//   }

//   public async store({ request, response }: HttpContext) {
//     const { guest_id, service_id } = request.only(['guest_id', 'service_id'])

//     // toggle wishlist
//     const existing = await Favorite.query()
//       .where('guest_id', guest_id)
//       .andWhere('service_id', service_id)
//       .first()

//     if (existing) {
//       await existing.delete()
//       return response.json({ status: 'removed' })
//     } else {
//       await Favorite.create({ guestId: guest_id, serviceId: service_id })
//       return response.json({ status: 'added' })
//     }
//   }

    public async toggle({ request, response }: HttpContext) {
        const { guest_id, service_id } = request.only(['guest_id', 'service_id'])
        if (!guest_id || !service_id) return response.badRequest({ message: 'Missing data' })

        const existing = await Favorite.query().where({ guest_id, service_id }).first()

        if (existing) {
            await existing.delete()
            return response.json({ status: 'removed' })
        } else {
            await Favorite.create({ guestId: guest_id, serviceId: service_id })
            return response.json({ status: 'added' })
        }
    }

  public async indexAdmin({ view }: HttpContext) {
    const wishlists = await Favorite.query().preload('service')
    return view.render('pages/admin/wishlist/index', { wishlists })
  }
}