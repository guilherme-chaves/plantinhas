import { plantStage } from '../interfaces/enum'

export interface UserData {
    userId: string;
    userName: string;
    userEmail: string;
    userPoints: number;
    userLevel: number;
    firstLogin: boolean;
}

export interface UserPlantInterface {
    userId: string;
    plantId: string;
    plantName: string;
    currentStage: plantStage;
    addedDate: Date;
}

export interface UserNoteInterface {
    userId: string,
    plantId: string,
    note: string,
    dateCreated: string,
    dateUpdated: string,
}

export interface UserTaskInterface {
    userTaskId: string;
    userId: string;
    taskId: string;
    day: string;
    completed: boolean;
}