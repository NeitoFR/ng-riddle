import { Component, OnInit, Input } from '@angular/core';
import { RiddleService } from 'src/app/services/riddle.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

// tslint:disable-next-line: variable-name
  // private _goodId: number;

  @Input()
  set goodId(goodId: string) {
    console.log('good Id changed', goodId);

    // this.riddleService.getImage(this._goodId)
  }

  constructor(private riddleService: RiddleService) { }

  ngOnInit() {
  }

}
