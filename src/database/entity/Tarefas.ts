import {BaseEntity,Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { PlantasUsuario } from './PlantasUsuario';

@Entity()
export class Tarefas extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Column()
	type!: string;

	@Column()
	hour!: string;

	@ManyToOne(type => PlantasUsuario)
	idPlantaUsuario!: PlantasUsuario;
}
