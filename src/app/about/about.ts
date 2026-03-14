import { Component } from "@angular/core";

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {

  name = 'pham duc';
  age: number = 22;

  say2(){
    alert('2 ' + this.name);
  }

}