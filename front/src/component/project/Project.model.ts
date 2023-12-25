export interface ProjectModel{
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    isPrivate: boolean;
    tasks: object;
}