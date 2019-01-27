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
  friend?: string;

  @belongsTo(() => Planet, {keyTo: 'id'})
  planet?: string;

  @belongsTo(() => Species, {keyTo: 'id'})
  species?: string;

  constructor(data?: Partial<Hero>) {
    super(data);
  }
}
