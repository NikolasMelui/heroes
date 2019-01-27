import {Entity, model, property} from '@loopback/repository';

@model()
export class Species extends Entity {
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
    type: 'number',
  })
  lifespan?: string;

  constructor(data?: Partial<Species>) {
    super(data);
  }
}
