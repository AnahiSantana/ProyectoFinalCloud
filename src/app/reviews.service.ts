import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private httpClient: HttpClient) { }

  postReview(data: any) {
    const url = "https://y969wcvj3c.execute-api.us-east-1.amazonaws.com/dev/reviews";

    return this.httpClient.post(url, data);
  }

}
