import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';





const routes: Routes = [
  {path:" ",component:TutorialListComponent},
  {path:"addTutorial", component:AddTutorialComponent},
  {path:":id",component:TutorialDetailsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
