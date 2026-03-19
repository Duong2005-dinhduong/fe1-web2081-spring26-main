import { Component } from '@angular/core';

@Component({
  selector: 'app-story',
  imports: [],
  templateUrl: './story.html',
  styleUrl: './story.css',
})
export class Story {
  stories = [
    {
      title:`One Piece`,
      author:`Oda`,
      views:1000,
    },
    {
      title:`Naruto`,
      author:`Kishimoto`,
      views:1500,
    },
    {
      title:`Dragon Ball`,          
      author:`Toriyama`,
      views:2000 ,
    },
  ]
}
