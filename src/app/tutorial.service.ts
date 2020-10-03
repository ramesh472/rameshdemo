import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TutorialService {
url = "http://localhost:8080/api/tutorials";
url1 = "http://localhost:8080/api/tutorials/doccuments";
  constructor(private http:HttpClient) {

   }
   getAllTutorials(){
    return this.http.get(this.url);
   }

   create(tutorial){
     return this.http.post(this.url,tutorial);
   }

   deleteAllTutorials(){
    return this.http.delete(this.url);
   }
   deleteTutorial(id){
     return this.http.delete(this.url+'/'+id);
   }
   publish(id,data){
    return this.http.put(this.url+'/'+id,data)

   }
   update(id,data){
     return this.http.put(this.url+'/'+id,data)
   }
   searchByTitle(title){
     return this.http.get(this.url,title)
   }

}
