import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  private dataSource = new BehaviorSubject('Hot soup');
  data = this.dataSource.asObservable();

  updatedDataSelection(item){
    this.dataSource.next(item);
  }
}
