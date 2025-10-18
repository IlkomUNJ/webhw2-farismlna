import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class AdminAuthMiddleware {
  public async handle({ session, response }: HttpContext, next: () => Promise<void>) {
    if (!session.get('isAdmin')) {
      session.flash('error', 'You must log in first')
      return response.redirect().toRoute('admin.login')
    }

    await next()
  }
}