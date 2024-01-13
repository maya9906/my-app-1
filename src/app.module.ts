import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PrismaService } from './prisma.service';
import { PostsResolver } from 'src/posts/models/posts.resolver';
import { ApolloServer} from '@apollo/server';
import { ApolloDriverConfig} from '@nestjs/apollo';

@Module({
  imports: [

    GraphQLModule.forRoot<ApolloDriverConfig>({

      driver: ApolloServer,

      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),

    }),

  ],
  controllers: [AppController],
  providers: [AppService, PostsResolver, PrismaService],
})
export class AppModule {}


