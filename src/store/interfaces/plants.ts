export interface PlantInterface {
    plantId: string;
    name: string;
    nameAlt: Array<string>;
    nameEsp: string;
    description: string;
}

export interface NeedOptionsInterface {
    level: number;
    description: string;
}

export interface NeedsInterface {
    water: NeedOptionsInterface;
    soil: NeedOptionsInterface;
    sun: NeedOptionsInterface;
    pets: NeedOptionsInterface;
}