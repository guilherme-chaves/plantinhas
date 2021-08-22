import {BaseEntity,Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Tarefas } from './Tarefas';

@Entity()
export class TarefasUsuario extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Column({type: "date"})
	data!: string;

	@ManyToOne(type => Tarefas)
	idTarefa!: string;
}
