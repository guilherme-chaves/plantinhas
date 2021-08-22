import {BaseEntity,Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { Plantas } from './Plantas';
import { NeedOptionsInterface } from '../../store/interfaces/plants'

@Entity()
export class NecessidadesPlantas extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@ManyToOne(type=>Plantas, plantas => plantas.necessidades)
	idPlant!: string;

	@Column()
	plantStage!: number;

	@Column("simple-json")
	necessidades!: {
		water: NeedOptionsInterface;
		soil: NeedOptionsInterface;
		sun: NeedOptionsInterface;
		pets: NeedOptionsInterface;
	};
}
