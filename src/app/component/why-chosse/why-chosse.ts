import { Component } from '@angular/core';
type list_image ={
  id:number,
  image:String,
  titre :String
}
@Component({
  selector: 'app-why-chosse',
  standalone: false,
  templateUrl: './why-chosse.html',
  styleUrl: './why-chosse.css',
})

export class WhyChosse {
  imageTest: list_image[] = [
    {
      id: 1,
      image: "image1.jpg",
      titre: "Smart Account Management"
    },
    {
      id: 2,
      image: "image2.jpg",
      titre: "Secure & Encrypted Transactions"
    },
    {
      id: 3,
      image: "image3.jpg",
      titre: "Real-Time Spending Insights"
    },
    {
      id: 4,
      image: "image4.jpg",
      titre: "Fast & Reliable Payments"
    }
  ];

}
