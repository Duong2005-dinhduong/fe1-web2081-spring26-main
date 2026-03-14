import { Component } from "@angular/core";

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {

  name = 'dinh duong ';
  age: number = 21;

  say2(){
    alert('2 ' + this.name);
  }
}