import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ToastrService } from "./toastr.service";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RiddleService {
  public currentGame: any[] = [];

  constructor(private httpClient: HttpClient, private toastr: ToastrService) {
    console.log(
      "The RiddleService is using : " + environment.riddleApi + " as API URL"
    );
  }

  generateLevel(): Observable<any[]> {
    let subject = new Subject<any[]>();
    this.httpClient.post(environment.riddleApi + "/generateGame", {}).subscribe(
      res => {
        console.log("Got new game ", res);
        this.currentGame = res["data"];
        subject.next(this.currentGame);
        subject.complete();
      },
      error => {
        console.log("Erreur : ", error);
        this.toastr.error("Error generating new game");
        return { error };
      }
    );
    if (subject) { return subject; }
  }
}
