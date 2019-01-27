import {DefaultCrudRepository} from '@loopback/repository';
import {Species} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SpeciesRepository extends DefaultCrudRepository<
  Species,
  typeof Species.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Species, dataSource);
  }
}
