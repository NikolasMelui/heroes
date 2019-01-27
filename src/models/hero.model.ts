import {Entity, model, property} from '@loopback/repository';

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

  @property({
    type: 'string',
  })
  friend?: string;

  @property({
    type: 'string',
  })
  planet?: string;

  @property({
    type: 'string',
  })
  species?: string;


  constructor(data?: Partial<Hero>) {
    super(data);
  }
}
