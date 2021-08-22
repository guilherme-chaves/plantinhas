//Entidades
import { ConnectionOptions } from 'typeorm';
import { NivelConquistas } from './entity/NivelConquistas';
import { Conquistas } from './entity/Conquistas';
import { AnotacoesUsuario } from './entity/AnotacoesUsuario';
import { Artigos } from './entity/Artigos';
import { CategoriasArtigos } from './entity/CategoriasArtigos';
import { Plantas } from './entity/Plantas';
import { NecessidadesPlantas } from './entity/NecessidadesPlantas';
import { PlantasUsuario } from './entity/PlantasUsuario';
import { Tarefas } from './entity/Tarefas';
import { TarefasUsuario } from './entity/TarefasUsuario';

//Migrações
/*
import {PlantasUsuario1629496294821} from './migrations/1629496294821-PlantasUsuario'
import {Artigos1629496354597} from './migrations/1629496354597-Artigos'
import {CategoriasArtigos1629496364864} from './migrations/1629496364864-CategoriasArtigos'
import {Conquistas1629496380845} from './migrations/1629496380845-Conquistas'
import {NivelConquistas1629496388640} from './migrations/1629496388640-NivelConquistas'
import {Plantas1629496421754} from './migrations/1629496421754-Plantas'
import {NecessidadesPlantas1629496484609} from './migrations/1629496484609-NecessidadesPlantas'
import {AnotacoesUsuario1629496503311} from './migrations/1629496503311-AnotacoesUsuario'
import {TarefasUsuario1629496587824} from './migrations/1629496587824-TarefasUsuario'
*/



export default (driver: any): ConnectionOptions[] => {
	const connections: ConnectionOptions[] = [
	{
		name:'appConnection',
		type: 'capacitor',
		driver: driver,
		database: 'plantinhas-app',
		entities: [
		Plantas,
		NecessidadesPlantas,
		AnotacoesUsuario,
		PlantasUsuario,
		Tarefas,
		TarefasUsuario,
		Artigos,
		CategoriasArtigos,
		],
		logging: ['error', 'query', 'schema'],
		synchronize: false,
		migrationsRun: false,
	},
	{
		name:'achievementsConnection',
		type: 'capacitor',
		driver: driver,
		database: 'plantinhas-achievements',
		entities: [Conquistas, NivelConquistas],
		logging: ['error', 'query', 'schema'],
		synchronize: false,
		migrationsRun: false,
	}
	];
	return connections;
}