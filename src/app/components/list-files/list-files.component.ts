import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { DeleteFilesComponent } from '../delete-files/delete-files.component';
import { File } from '../../interfaces/file';

@Component({
  selector: 'app-list-files',
  standalone: true,
  imports: [
    CommonModule,
    DeleteFilesComponent
  ],
  templateUrl: './list-files.component.html',
  styleUrl: './list-files.component.sass'
})
export class ListFilesComponent {
  @Input("files")
  public files: File[] = [];

  constructor() {}

  public updateFiles(files: File[]) {
    this.files = files;
  }
}
