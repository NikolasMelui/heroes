import {Entity, model, property} from '@loopback/repository';

@model()
export class Planet extends Entity {
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
  climate?: string;

  constructor(data?: Partial<Planet>) {
    super(data);
  }
}
