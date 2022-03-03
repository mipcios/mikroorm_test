import { Module, NestModule } from '@nestjs/common';
import { UserController } from './user-action.controller';
import { UserAction } from './user-action.entity';
import { UserService } from './user.service';
import { MikroOrmModule } from '@mikro-orm/nestjs'

@Module({
  controllers: [
    UserController,
  ],
  exports: [UserService],
  imports: [MikroOrmModule.forFeature({ entities: [UserAction] })],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure() {
  }
}
