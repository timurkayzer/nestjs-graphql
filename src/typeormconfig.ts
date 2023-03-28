import { join } from 'path';
import { DataSourceOptions } from 'typeorm';
import { Pet } from './pets/pet.entity';

const typeOrmConfig: DataSourceOptions = {
    type: 'sqlite',
    database: ':memory:',
    entities: [Pet],

    synchronize: true,
};
export default typeOrmConfig;