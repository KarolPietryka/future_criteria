export interface ProjectModel{
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    isPrivate: boolean;
    tasks: object;
}