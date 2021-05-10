import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToneService {

  constructor(private httpClient: HttpClient) { }

  postTone(data: any) {
    const url = "https://toneanalyzer-mystery-box.mybluemix.net";

    return this.httpClient.post(url, data, { reportProgress: true, observe: 'events' });
  }

}
