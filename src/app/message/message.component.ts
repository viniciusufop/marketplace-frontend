import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message = '';
  title = '';

  constructor(private  dialogRef:  MatDialogRef<MessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data:  any) {
      this.title = data.title;
      this.message = data.message;
     }

  ngOnInit() {}

  public  closeMe() {
    this.dialogRef.close();
  }
}
