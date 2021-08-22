import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { PlantasUsuario } from './PlantasUsuario'

@Entity()
export class AnotacoesUsuario extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    idUser!: string;

    @ManyToOne(type=> PlantasUsuario)
    idPlantaUsuario!: PlantasUsuario;

    @Column({ type: "text" })
    note!: string
}
