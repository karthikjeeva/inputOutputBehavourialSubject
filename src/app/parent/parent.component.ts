import { Component } from '@angular/core';
import { DataSourceService } from '../data-source.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {
 currentItem = "Hot Soup";
 items = [];

 constructor (private ds:DataSourceService) {}
 
 changeValue() {
  this.ds.updatedDataSelection('chickhen');
  this.ds.data.subscribe(item => {
    this.currentItem = item
  })
 }

/*  addItem(newItem: Event) {
   console.log(newItem);
  //this.items.push(newItem);
 } */

}
