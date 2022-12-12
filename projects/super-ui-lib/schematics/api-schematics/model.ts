export interface FileModel {
  title: string;
  entity: string;
  api: CrudEndpoints;
  fields: Field[];
  ButtonName:string;
}

export interface CrudEndpoints {
  url: string;
}

export interface Field {
  id: number;
  title:string,
  price:number,
  category:string,
  description:string,
  image:string
}
  