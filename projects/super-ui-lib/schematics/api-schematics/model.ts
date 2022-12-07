export interface FileModel {
    name:string;
    title: string;
    entity:string;
    buttonName: string;
    fields:Field[];
    menuItem :Menu[];
    api:Endpoints;

    
  }
  export interface Field {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
  }
  export interface Endpoints{
    url:string
  }
  
  export interface Menu {
    home: string;
    about: string
    
  }

  
  