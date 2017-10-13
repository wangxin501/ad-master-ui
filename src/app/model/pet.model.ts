import { IBaseModel } from './';

export interface IPet extends IBaseModel {
    category: ICategory;
    name: string;
    photoUrls: string[];
    tags: ITag[];
    status: string;
}

export interface ICategory extends IBaseModel {
    name: string;
}

export interface ITag extends IBaseModel {
    name: string;
}
