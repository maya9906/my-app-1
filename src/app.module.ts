import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule, ApolloDriver } from '@nestjs/graphql'; // ApolloDriver をインポート
import { join } from 'path';
import { PrismaService } from './prisma.service';
import { PostsResolver } from 'src/posts/models/posts.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: { provide: 'APOLLO_DRIVER', useValue: new ApolloDriver() }, // 例: ApolloDriver のインスタンスを指定
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PostsResolver, PrismaService],
})
export class AppModule {}


// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { GraphQLModule } from '@nestjs/graphql'; // ここで ApolloDriverConfig をインポート
// import { ApolloDriverConfig } from '@nestjs/graphql';
// import { join } from 'path';  
// import { PrismaService } from './prisma.service'; // PrismaService をインポートする
// import { PostsResolver } from 'src/posts/models/posts.resolver'
// @Module({
//   imports: [
//     GraphQLModule.forRoot<ApolloDriverConfig>({
//       autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
//     }),
//   ],
//   controllers: [AppController],
//   providers: [AppService, PrismaService, PostsResolver], // PostsResolver が提供されているか確認する
// })
// export class AppModule {}

// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriverConfig } from '@nestjs/graphql/dist/interfaces/drivers/driver.interface';
// import { join } from 'path';  // もしくは 'path' パッケージをインポートする必要があります

// @Module({
//   imports: [

//     GraphQLModule.forRoot<ApolloDriverConfig>({


//       autoSchemaFile: join(process.cwd(), 'src/schema.gql'),

//     }),

//   ],
//   controllers: [AppController],
//   providers: [AppService, PrismaService, PostsResolver],
// })
// export class AppModule {}
