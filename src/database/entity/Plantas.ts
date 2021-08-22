import {BaseEntity,Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { NecessidadesPlantas } from './NecessidadesPlantas';

@Entity()
export class Plantas extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Column()
	name!: string;

	@Column()
	nameAlt!: string[];

	@Column()
	nameEsp!: string;

	@Column({ type: "text" })
	description!: string;

	@OneToMany(() => NecessidadesPlantas, necessidadesPlantas => necessidadesPlantas.idPlant, {
		eager: true
	})
	necessidades!: NecessidadesPlantas[];
}
