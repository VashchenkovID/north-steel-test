export interface ResponseModel {
  args: {[key:string]:string};
  headers: {
      [key:string]:string
  };
  origin: string;
  url: string;
}
