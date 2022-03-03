import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs'
import { UserAction } from '../user-action/user-action.entity';
import { UserModule } from '../user-action/user-action.module';
import { ArticleController } from './step.controller';
import { Step } from './step.entity';
import { ArticleService } from './step.service';

@Module({
  controllers: [
    ArticleController,
  ],
  imports: [MikroOrmModule.forFeature({ entities: [Step,  UserAction] }), UserModule],
  providers: [ArticleService],
})
export class ArticleModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
