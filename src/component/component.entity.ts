import {
	Entity,
	ManyToOne,
	OneToOne,
	PrimaryKey,
	PrimaryKeyType,
	Property,
} from '@mikro-orm/core';

import { Step } from '../step/step.entity';

@Entity()
export class Component {

	@PrimaryKey()
	idComponent: string;

	@Property()
	name: string;

	@Property()
	description: string;

	@ManyToOne({ onDelete: 'cascade' })
	step!: Step;

	@OneToOne({
		nullable: true,
		fieldName: 'resultComponentId',
		unique: false,
		entity: () => Component,
	})
	resultComponent?: Component;

	[PrimaryKeyType]: [string];

	constructor(username: string) {
		this.name = username;
	}
}
