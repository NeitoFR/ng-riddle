import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-stop-game-component',
  templateUrl: '../dialog/stop-game-component.html',
})
export class StopGameDialogComponent {

  constructor(public stopGameDialRef: MatDialogRef<StopGameDialogComponent>) { }

  onNoClick(): void {
    this.stopGameDialRef.close();
  }

}
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output()
  stopGame = new EventEmitter<string>();

  @Input() gameStarted: boolean;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const stopGameDialRef = this.dialog.open(StopGameDialogComponent, {
      width: '250px'
    });

    stopGameDialRef.afterClosed().subscribe((choice) => {
      if (choice) {
        this.stopGame.emit();
      }
    });
  }
  ngOnInit() {

  }
}
