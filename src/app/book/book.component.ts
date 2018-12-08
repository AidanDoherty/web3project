import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { Ibook } from './IBook'
import { BookserviceService } from '../bookservice.service'
import { AuctionService } from '../service/auction.service';
import { CardComponent } from '../template/card/card.component';
import { IAuction } from '../interface/iauction';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private _BookserviceService: BookserviceService, private _auctionservice: AuctionService, private componentFactoryResolver: ComponentFactoryResolver) { }

  @Input() bookid
  @Input() auctionid

  book: Ibook;
  currentbid
  auctiondata

  @Input() data: IAuction;

  @ViewChild('container', { read: ViewContainerRef }) private container: ViewContainerRef;






  ngOnInit(): void {


    this._auctionservice.getBids("1").subscribe(data =>
      this._auctionservice.CurrentHighistBid = data[0].bidAmount)

      this.currentbid = this._auctionservice.CurrentHighistBid
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CardComponent);
      const viewContainerRef = this.container;
      viewContainerRef.clear();

      
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<CardComponent>componentRef.instance).data = this.data;
  }
}