import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outputparent',
  templateUrl: './outputparent.component.html',
  styleUrls: ['./outputparent.component.css']
})
export class OutputparentComponent {
   items = [];

   addItem(newItem: string) {
    this.items.push(newItem);
  }

}
