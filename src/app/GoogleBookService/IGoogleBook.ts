export interface IGoogleBook{
    items: IItems[];
}
export interface IItems{
    volumeInfo:IvolumeInfo
}
export interface IvolumeInfo{
  title:string;
  authers:IAuthor[]
  publisher:string;
  description:string;
  imageLinks:imageLinks;
}
export interface imageLinks{
    thumbnail:string;
}
export interface IAuthor{
    authors:string;
}
/*this is the mapping of the google book */ 