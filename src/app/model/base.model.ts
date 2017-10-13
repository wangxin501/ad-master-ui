export interface IBaseModel {
  id: number;
  createdBy?: string;
  lastModifiedBy?: string;
  creationTime?: Date;
  lastModificationTime?: Date;
  version?: number;
}

export interface IErrorResponse {
  code: number;
  type: string;
  message: string;
}
