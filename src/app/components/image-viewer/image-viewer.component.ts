import { Component, OnInit, Input } from '@angular/core';
import { RiddleService } from 'src/app/services/riddle.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _goodId: string;

  imageToShow: any;

  safeImageURL: any;

  constructor(private riddleService: RiddleService, private sanitizer: DomSanitizer) { }

  @Input()
  set goodId(goodId: string) {
    console.log('good Id changed', goodId);
    this._goodId = goodId;
    this.riddleService.getImage(this._goodId).subscribe(data => {
      console.log("Data from image", data);

      this.createImageFromBlob(data);
    }, error => {
      console.log('Error loading image', error);
    });
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
      this.safeImageURL = this.sanitizer.bypassSecurityTrustUrl(this.imageToShow);
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
  ngOnInit() {}
}
