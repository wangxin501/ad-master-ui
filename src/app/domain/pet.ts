import { IBaseDomain } from 'src/app/domain/base-domain';

export interface IPet extends IBaseDomain {
    category: ICategory;
    name: string;
    photoUrls: string[];
    tags: ITag[];
    status: string;
}

export interface ICategory extends IBaseDomain {
    name: string;
}

export interface ITag extends IBaseDomain {
    name: string;
}
