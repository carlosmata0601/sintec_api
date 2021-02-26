import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductsModule } from './Products/product.module';

@Module({
    imports: [
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql']
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'charli',
            password: 'root',
            database: 'dbSintec',
            entities: ['dist/**/*.entity{.ts,.js}'],
            synchronize: false,
            retryDelay: 3000,
            retryAttempts: 10
        }),
        ProductsModule
    ],
})

export class AppModule { }
