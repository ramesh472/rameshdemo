import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent {
  tutorialsList:any =[];
  currentTutorial: any;
  currentIndex = -1;
  tutorial="";
  error;
  constructor(private tutorialService:TutorialService, private activatedRoute:ActivatedRoute) {
    this.tutorialService.getAllTutorials().subscribe(res=>{
      console.log(res) 
      this.tutorialsList = res;   
    }, error=>{
      console.log(error);

      this.error = error
    })

  }
  clearAllTutorials(){
    this.tutorialService.deleteAllTutorials().subscribe(result=>{
      console.log(result)
    })
  }

setActiveTutorial(t,i){
  this.currentTutorial = t;
  this.currentIndex = i;
  console.log(this.currentTutorial.title)
}
searchByTitle(){
 const title= this.tutorial;
 this.tutorialService.searchByTitle(title);
}



}
