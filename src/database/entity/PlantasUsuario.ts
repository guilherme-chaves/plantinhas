import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Plantas } from './Plantas';

@Entity()
export class PlantasUsuario extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    idUser!: string;

    @ManyToOne(type => Plantas)
    idPlant!: Plantas;

    @Column()
    name!: string;

    @Column()
    stage!: number;
}
