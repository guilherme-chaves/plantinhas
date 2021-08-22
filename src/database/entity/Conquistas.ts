import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { NivelConquistas } from './NivelConquistas';

@Entity()
export class Conquistas extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Column()
	idUser!: string;

	@Column()
	title!: string;

	@Column()
	description!: string;

	@OneToMany(() => NivelConquistas, nivelConquistas => nivelConquistas.conquista, {
		cascade: true,
		eager: true
	})
	levels!: NivelConquistas[];

	@Column()
	currentLevel!: number;

	@Column()
	newUnlocked!: boolean;

	@Column()
	currentProgress!: number;
}
