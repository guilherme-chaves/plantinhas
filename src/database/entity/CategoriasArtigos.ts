import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Artigos } from './Artigos';

@Entity()
export class CategoriasArtigos extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Column()
	name!: string;

	@ManyToMany(() => Artigos, artigos => artigos.categorias, {
		cascade: ["insert", "update"]
	})
	@JoinTable()
	artigos!: Artigos[];

	
}
