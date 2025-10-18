import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Portfolio from './portfolio.js'
import Favorite from './favorite.js'

export default class Service extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description:string
  
  @column()
  declare price: number
  
  @column({ columnName: 'image_url' })
  declare imageUrl: string | null
  
  @column()
  declare category: string | null

  @hasMany(() => Portfolio)
  declare portfolios: HasMany<typeof Portfolio>
  
  @hasMany(() => Favorite)
  declare favorites: HasMany<typeof Favorite>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}