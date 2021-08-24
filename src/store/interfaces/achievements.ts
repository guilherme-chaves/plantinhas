export interface AchievementLevelInterface {
    targetDesc: string;
    targetProgress: number;
    givenPoints: number;
}

export interface AchievementInterface {
    achievementId: string;
    title: string;
    description: string;
    levels: Array<AchievementLevelInterface>;
    actionFunction: Promise<void>;
}