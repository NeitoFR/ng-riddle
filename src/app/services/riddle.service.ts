import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ToastrService } from './toastr.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RiddleService {

  constructor(private httpClient: HttpClient, private toastr: ToastrService) {
    console.log(
      'The RiddleService is using : ' + environment.riddleApi + ' as API URL'
    );
  }

  generateLevel(): Observable<any[]> {
    const subject = new Subject<any[]>();
    this.httpClient.post(environment.riddleApi + '/generateGame', {}).subscribe(
      (res: any[]) => {
        console.log('Got new game ', res);
        subject.next(res);
        subject.complete();
      },
      error => {
        console.log('Erreur : ', error);
        this.toastr.error('Error generating new game');
        return { error };
      }
    );
    if (subject) { return subject; }
  }
}
