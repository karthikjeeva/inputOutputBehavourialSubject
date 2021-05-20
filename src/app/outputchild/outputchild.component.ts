import { Component,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-outputchild',
  templateUrl: './outputchild.component.html',
  styleUrls: ['./outputchild.component.css']
})
export class OutputchildComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    //console.log(value);
  }
}
