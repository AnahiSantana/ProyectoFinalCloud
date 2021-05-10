import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewsService } from 'src/app/reviews.service';
import { ToneService } from 'src/app/tone.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  nombreProducto = "Caja grande";
  precio = "$79.99";
  descripcion = "Caja de gran tamaño con muchos artículos dentro de ella. Recomendada si vas a compartir con alguien más.";
  urlToImage = "https://i2.wp.com/samooraisnacks.co.uk/wp-content/uploads/2020/07/20200724_170331_0000.png?fit=1880%2C1576&ssl=1";
  reviews = [];
  users = [];


  constructor(
    private reviewService: ReviewsService,
    private toneService: ToneService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getReviews()
  }

  showCajaGrande() {
    this.nombreProducto = "Caja grande";
    this.precio = "$79.99";
    this.descripcion = "Caja de gran tamaño con muchos artículos dentro de ella. Recomendada si vas a compartir con alguien más.";
    this.urlToImage = "https://www.ororadio.com.mx/noticias/wp-content/uploads/2018/09/dulces-tipicos-mexicanos-1.jpg";
  }
  showCajaMediana() {
    this.nombreProducto = "Caja mediana";
    this.precio = "$59.99";
    this.descripcion = "Caja intermedia en tamaño, que puede ser tanto para compartir con una persona como para ti solo si es que tienes mucha hambre";
    this.urlToImage = "https://magazine.velasresorts.com.mx/wp-content/uploads/2020/08/dulces-mexicanos.jpeg";
  }
  showCajaPeque() {
    this.nombreProducto = "Caja pequeña";
    this.precio = "$39.99";
    this.descripcion = "Esta caja es indicada si tienes ganas de un snack repentino y no sabes que pedir. Es la más pequeña de todas."
    this.urlToImage = "https://i2.wp.com/www.confitexpoinforma.com/wp-content/uploads/2019/11/Cua%CC%81l-es-el-escenario-de-los-dulces-ti%CC%81picos-mexicanos-actualmente.jpg?fit=1548%2C871&ssl=1";
  }

  getReviews() {
    this.reviewService.getReview().subscribe((res: any) => {

      res.data["Items"].forEach(element => {
        let item = {
          "review": element.text,
          "author": element.author,
          "date": element.date
        };
        this.reviews.push(item);
      });
    });

  }


  addReview(newReview: string) {
    if (newReview) {

      let datatone = {
        "text": newReview,
      }

      this.toneService.postTone(datatone).subscribe((res: any) => {

        if (res.body) {
          console.log(localStorage.getItem('username'));
          let data = {
            "text": newReview,
            "user": localStorage.getItem('username') != null ? localStorage.getItem('username') : "anonymous user",
            "tone": res.body.tones
          }
          this.reviewService.postReview(data).subscribe();
        }
      });
    }
  }
}
