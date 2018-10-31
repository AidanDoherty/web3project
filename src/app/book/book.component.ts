import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  books: Ibook[] = [
{
  bookId:1,
  name:"Harry Potter",
  auther:"Jk Wrowling",
  reserve:50,
  description:"scratch on the back",
  imgsrc:"https://i.pinimg.com/originals/34/db/a0/34dba007710398a100e398a5fbd71c54.jpg"
},
{
  bookId:1,
  name:"Harry Potter",
  auther:"Jk Wrowling",
  reserve:50,
  description:"scratch on the back",
  imgsrc:"https://ewedit.files.wordpress.com/2016/09/hpchamber.jpg?w=405"
}
  ]
}
