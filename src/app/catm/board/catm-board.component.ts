import { Component } from '@angular/core';

@Component({
  selector: 'catm-board',
  templateUrl: './catm-board.component.html',
  styleUrls: [
    './_catm-board.component.scss'
  ]
})
export class CatmBoardComponent {

  public cards: any[];

  constructor () {
    this.cards = [
      { text: 'text 0' },
      { text: 'text 1' },
      { text: 'text 2' },
      { text: 'text 3' },
      { text: 'text 4' },
      { text: 'text 5' },
      { text: 'text 6' },
      { text: 'text 7' },
      { text: 'text 8' },
      { text: 'text 9' },
    ];
  }
}
