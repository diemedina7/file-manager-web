import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { AddFileComponent } from '../add-file/add-file.component';
import { File } from '../../interfaces/file';
import { FileService } from '../../services/file.service';
import { ListFilesComponent } from '../list-files/list-files.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.sass',
  imports: [
    CommonModule,
    AddFileComponent,
    ListFilesComponent
  ],
})
export class MainPageComponent implements OnInit {
  public files: File[] = [];

  constructor( private fs: FileService ) {}

  public saveFile(file: File) {
    this.fs.addFile(file);
  }

  ngOnInit(): void {
      this.files = this.fs.files;
  }
}
