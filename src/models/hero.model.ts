import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Planet} from './planet.model';
import {Species} from './species.model';

@model()
export class Hero extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @belongsTo(() => Hero, {keyTo: 'id'})
  friendId?: string;

  @belongsTo(() => Planet, {keyTo: 'id'})
  planetId?: string;

  @belongsTo(() => Species, {keyTo: 'id'})
  speciesId?: string;

  constructor(data?: Partial<Hero>) {
    super(data);
  }
}
