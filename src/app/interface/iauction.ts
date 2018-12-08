import { Ibook } from '../book/IBook';
import { Ibid } from '../auction/IBid';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface IAuction {
    id
    BookID
    Price
    createdby
    TimeRemaining
    book:Ibook;
    Bids: Ibid[]
    EndDate: Date
}
