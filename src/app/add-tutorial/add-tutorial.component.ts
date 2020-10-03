import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../tutorial.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';





@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  
imageURL :String;
 
submitted = false;
  uploadedFiles_image: Array<any>;
  uploadedFiles_video: Array<any>;
public data ={
  title:"",
  description:"",
  assetType:"",
  language:"",
  state:""
}

myForm = new FormGroup({
  file:new FormControl(''),
  title: new FormControl(''),
  description: new FormControl(''),
  assetType: new FormControl(''),
  language: new FormControl(''),
  state: new FormControl('')

})
  
  constructor(private tutorialService:TutorialService,private router:Router) {

    
   }

   fileChange_image(event){
    this.uploadedFiles_image = event.target.files;
   }
   fileChange_video(event){
    this.uploadedFiles_video = event.target.files;
    console.log(this.uploadedFiles_image[0].name)
   }
 
upload(){
  
const formData = new FormData();

formData.append('image',this.uploadedFiles_image[0],this.uploadedFiles_image[0].name);
formData.append('video',this.uploadedFiles_video[0],this.uploadedFiles_video[0].name);
formData.append('title',this.data.title);
formData.append('description',this.data.description);
formData.append('assetType',this.data.assetType);
formData.append('state',this.data.state);
formData.append('language',this.data.language)

console.log(formData.get('image'));
console.log(formData.get('video'));
console.log(this.data.assetType)

this.tutorialService.create(formData).subscribe(response=>{
  console.log(response)
})

}

  ngOnInit(): void {

  }


 
}
