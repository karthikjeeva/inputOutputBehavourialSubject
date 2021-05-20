import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { OutputparentComponent } from '../outputparent/outputparent.component';
import { ParentComponent } from '../parent/parent.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'input', component: ParentComponent  },
  { path: 'output', component: OutputparentComponent }
 
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
