import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Formulario } from '../formulario/formulario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.html',
  styleUrl: './dialogo.scss',
  imports: [CommonModule, MatDialogModule],
  standalone: true
})
export class Dialogo implements OnInit {
  datos : any = null;

  constructor(private dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(Formulario);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.datos = result;
        this.cdr.detectChanges();
      }
    });
  }

}
