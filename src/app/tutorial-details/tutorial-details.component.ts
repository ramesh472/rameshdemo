import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {
  currentTutIndex: any;
  tutorials;
  published: any;

  constructor(private activatedRoute: ActivatedRoute, private tutorialService:TutorialService) {
    this.activatedRoute.paramMap.subscribe(res=>{
      this.currentTutIndex = res;
      console.log(this.currentTutIndex.params.id);
 
      this.tutorialService.getAllTutorials().subscribe(tuts=>{
        this.tutorials = tuts
      })

    })
   }
   delete(id){
     
     this.tutorialService.deleteTutorial(id).subscribe(response=>{
       console.log(response)
     })
   }

   publishing(status){

    const id= this.tutorials[this.currentTutIndex.params.id].id;

    console.log(id)

      const data = {
        title: this.tutorials[this.currentTutIndex.params.id].title,
        description: this.tutorials[this.currentTutIndex.params.id].description,
        published: status
      }
     this.tutorialService.publish(id,data).subscribe(resp =>{
      console.log(resp)
       
     })
     
     console.log(data)
   }

   updateTutorial(id){
     const data = {
       title : this.tutorials[this.currentTutIndex.params.id].title,
       description: this.tutorials[this.currentTutIndex.params.id].description,
    
     }
     console.log(data)
     this.tutorialService.update(id,data).subscribe(result=>{
       
     })
   }


  ngOnInit(): void {
  }

}
