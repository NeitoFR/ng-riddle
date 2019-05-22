import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ToastrService } from './toastr.service';
import { Observable, Subject } from 'rxjs';
import { ILevel } from '../interfaces/level.model';

@Injectable({
  providedIn: 'root'
})

export class RiddleService {

  constructor(private httpClient: HttpClient, private toastr: ToastrService) {
    console.log(
      'The RiddleService is using : ' + environment.riddleApi + ' as API URL'
    );
  }

  generateLevel(): Observable<ILevel[]> {
    const subject = new Subject<ILevel[]>();
    this.httpClient.post(environment.riddleApi + '/generateGame', {}).subscribe(
      (res: ILevel[]) => {
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
