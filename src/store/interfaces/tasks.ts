import { typeTask, weekDays } from './enum'

export interface TasksInterface {
    idTask: string;
    hour: string;
    repeat: Array<weekDays>;
    type: typeTask;
    idUser: string;
    idPlantaUser: string;
    active: boolean;
}