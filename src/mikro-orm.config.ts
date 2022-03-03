import { MikroOrmModuleOptions as Options } from '@mikro-orm/nestjs';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Component } from './component/component.entity';
import { Step } from './step/step.entity';
import { UserAction } from './user-action/user-action.entity';

const config: Options = {
  entities: [
    UserAction,
    Step,
    Component,
  ],
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  dbName: 'nestjsrealworld',
  debug: true,
  highlighter: new SqlHighlighter(),
};

export default config;
