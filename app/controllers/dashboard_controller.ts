import Portfolio from '#models/portfolio'
import Service from '#models/service'
import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
    public async index({ view }: HttpContext) {
        const totalServices = await Service.query().count('* as total')
        const totalPortfolios = await Portfolio.query().count('* as total')

        // kalau nanti wishlist disimpan di DB, bisa pakai query juga.
        // untuk sekarang kita set 0 dulu
        const totalWishlists = 0

        return view.render('pages/admin/dashboard', {
            totalServices: totalServices[0].$extras.total,
            totalPortfolios: totalPortfolios[0].$extras.total,
            totalWishlists,
        })
    }
}