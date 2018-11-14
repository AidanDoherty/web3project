export interface IGoogleBook{
    items: IItems[];
}
export interface IItems{
    volumeInfo:IvolumeInfo
}
export interface IvolumeInfo{
  title:string;
}
export interface Iurl{
    thumnail:string;
}