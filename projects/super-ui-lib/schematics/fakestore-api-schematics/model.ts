export interface FileModel {
  title: string;
  entity: string;
  api: CrudEndpoints;
  fields: Field[];
  menuItem :Menu[];
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
export interface Menu {
 
  fakestore: string
  about: string;
  
}

  