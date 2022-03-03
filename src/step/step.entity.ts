import { Collection, Entity, ManyToOne, OneToMany, PrimaryKey, PrimaryKeyType, Property, wrap } from '@mikro-orm/core';
import slug from 'slug';
import { Component } from '../component/component.entity';
import { UserAction } from '../user-action/user-action.entity';

@Entity()
export class Step {

  @PrimaryKey()
  id: number;

  @ManyToOne({primary: true, onDelete: 'cascade' })
  userAction: UserAction;

  @Property()
  title: string;

  @Property()
  subtitle = '';


  @OneToMany('Component', 'step')
  components = new Collection<Component>(this);

  [PrimaryKeyType]: [string, string];

  constructor(author: UserAction, title: string, description: string) {
    this.userAction = author;
    this.title = title;
    this.subtitle = description;
    this.title = slug(title, { lower: true }) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
  }
}
