import { DataSource } from 'typeorm';
import { CreateCatDto } from './cats/dto/cats.dto';
import { CreateCat } from './cats/entity/create.cat';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'admin',
        database: 'animals',
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        entities: [CreateCat],
        synchronize: true,
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];
