import type { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'

export default class AuthController {
    public async showLogin({ view }: HttpContext) {
        return view.render('pages/admin/login')
    }

    public async login({ request, response, session }: HttpContext) {
        const username = request.input('username')
        const password = request.input('password')

        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
            session.put('isAdmin', true)
            session.flash('success', 'Welcome back, Admin!')
            return response.redirect().toRoute('admin.dashboard')
        }

        session.flash('error', 'Invalid credentials')
        return response.redirect().back()
    }

    public async logout({ session, response }: HttpContext) {
        session.forget('isAdmin')
        session.flash('success', 'Logged out successfully')
        return response.redirect().toRoute('admin.login')
    }
}