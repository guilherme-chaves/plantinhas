import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Plantas } from './Plantas';
import { CategoriasArtigos } from './CategoriasArtigos';

@Entity()
export class Artigos extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Column()
	name!: string;

	@Column()
	typeArticle!: number;

	@Column("simple-array")
	pathImagens!: string[];

	@Column({ type: "simple-json" })
	texto!: {
		paragrafos: [];
	};

	@ManyToMany(() => CategoriasArtigos, categorias => categorias.artigos,{
		cascade: ["insert", "update", "recover"],
		eager: true
	})
	categorias!: CategoriasArtigos[];

	@Column("simple-array")
	referecias!: string[];

	@ManyToMany(() => Plantas, {
		cascade: false
	})
	@JoinTable()
	plantas!: Plantas[];

	@Column("simple-array", { nullable: true })
	plantStage!: number[];
}
