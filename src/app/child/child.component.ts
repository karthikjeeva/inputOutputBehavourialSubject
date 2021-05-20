import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  @Input() item = '';
  @Output() talkToParent = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes.item.currentValue);//get value from stream
   console.log(changes.item.previousValue);
  }

  addNewItem(value: string) {
    this.talkToParent.emit(value);
  }

}
