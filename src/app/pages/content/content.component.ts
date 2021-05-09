import { Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/reviews.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  nombreProducto = "Caja grande";
  precio = "$79.99";
  descripcion = "Caja de gran tamaño con muchos artículos dentro de ella. Recomendada si vas a compartir con alguien más.";

  constructor(
    private reviewService: ReviewsService
  ) { }

  ngOnInit(): void {

  }

  showCajaGrande() {
    this.nombreProducto = "Caja grande";
    this.precio = "$79.99";
    this.descripcion = "Caja de gran tamaño con muchos artículos dentro de ella. Recomendada si vas a compartir con alguien más.";
  }
  showCajaMediana() {
    this.nombreProducto = "Caja mediana";
    this.precio = "$59.99";
    this.descripcion = "Caja intermedia en tamaño, que puede ser tanto para compartir con una persona como para ti solo si es que tienes mucha hambre";
  }
  showCajaPeque() {
    this.nombreProducto = "Caja pequeña";
    this.precio = "$39.99";
    this.descripcion = "Esta caja es indicada si tienes ganas de un snack repentino y no sabes que pedir. Es la más pequeña de todas."
  }

  reviews = [];
  addReview(newReview: string) {
    if (newReview) {
      let data = {
        "text": newReview,
        "user": "Anahí Santana",
        "tone": "Sad"
      }
      console.log(this.reviewService.postReview(data));

      this.reviews.push(newReview);
    }
  }
}
