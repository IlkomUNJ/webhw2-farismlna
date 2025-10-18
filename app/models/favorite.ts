import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo} from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Service from './service.js'

export default class Favorite extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare guestId: string
  
  @column()
  declare serviceId: number

  // @belongsTo(() => User)
  // declare user: BelongsTo<typeof User>
  
  @belongsTo(() => Service)
  declare service: BelongsTo<typeof Service>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}