import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';

import { Step } from '../step/step.entity';

@Entity()
export class UserAction {

  @PrimaryKey()
  idUserAction: string;

  @Property()
  name: string;
  
  @Property()
  description: string;

  @OneToMany('Step', 'userAction')
  steps = new Collection<Step>(this);

  constructor(username: string, email: string, password: string) {
    this.name = username;
  }
}
