import { Ibook } from '../book/IBook';
import { Ibid } from '../auction/IBid';

export interface IAuction {
    id
    BookID
    Price
    TimeRemaining
    book:Ibook;
    Bids: Ibid[]
}
