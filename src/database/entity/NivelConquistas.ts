import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Conquistas } from './Conquistas'

@Entity()
export class NivelConquistas extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	description!: string;

	@Column()
	targetValue!: number;

	@Column()
	givenPoints!: number;

	@ManyToOne(type=>Conquistas, conquistas => conquistas.levels)
	conquista!: Conquistas
}
