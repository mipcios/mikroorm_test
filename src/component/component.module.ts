import { Module } from '@nestjs/common';
import { UserModule } from '../user-action/user-action.module';
import { TagController } from './component.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs'

@Module({
  controllers: [
    TagController,
  ],
  exports: [],
  imports: [MikroOrmModule.forFeature({ entities: [] }), UserModule],
  providers: [],
})
export class TagModule { }
