export interface IGoogleBook{
    items: IItems[];
}
export interface IItems{
    volumeInfo:IvolumeInfo
}
export interface IvolumeInfo{
  title:string;
  publisher:string;
  imageLinks:imageLinks;
}
export interface imageLinks{
    thumbnail:string;
}