import { Ibook } from '../book/IBook';
import { Ibid } from '../auction/IBid';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface IAuction {
    id?
    createdby
    bookname:string;
    auther:string;
    description:string;
    imgsrc:string;
    publisher:string
    Bids?: Ibid[]
    EndDate: number
}

/*Creating an interface for auction */