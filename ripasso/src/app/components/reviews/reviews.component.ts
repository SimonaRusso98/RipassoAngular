import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews = [
    {
      "name":"Name of user 1",
      "reviewSummary": "Esperienza discreta",
      "rating": 2.5,
      "reviewMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus."
    },
    {
      "name":"Name of user 2",
      "reviewSummary": "Buona Esperienza",
      "rating": 3.45,
      "reviewMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus."
    },
    {
      "name":"Name of user 3",
      "reviewSummary": "Pessima Esperienza",
      "rating": 0.5,
      "reviewMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus."
    },

    {
      "name":"Name of user 3",
      "reviewSummary": "Eccellente",
      "rating": 5.0,
      "reviewMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus."
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
