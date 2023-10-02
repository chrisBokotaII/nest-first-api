import { Module } from '@nestjs/common';
import { authentication } from './Auth/auth.module';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [authentication, UsersModule, MoviesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
