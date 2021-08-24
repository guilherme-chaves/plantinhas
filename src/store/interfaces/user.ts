import { plantStage } from './enum'

export interface UserData {
    userId: string;
    userName: string;
    userEmail: string;
    userPoints: number;
    userLevel: number;
    firstLogin: boolean;
}

export interface UserPlantInterface {
    userPlantId: string;
    userId: string;
    plantId: string;
    plantName: string;
    plantEsp: string;
    currentStage: plantStage;
    addedDate: Date;
}

export interface UserNoteInterface {
    userId: string;
    plantId: string;
    note: string;
    dateCreated: string;
    dateUpdated: string;
}

export interface UserTaskInterface {
    userTaskId: string;
    taskId: string;
    day: string;
    completed: boolean;
}

export interface UserAchievements {
    idUserAchievement: string;
    idUser: string;
    idAchievement: string;
    currentLevel: number;
    newUnlocked: boolean;
    currentProgress: number;
}