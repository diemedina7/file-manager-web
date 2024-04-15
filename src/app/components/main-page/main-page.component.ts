import { Component } from '@angular/core';

import { AddFileComponent } from '../add-file/add-file.component';
import { File } from '../../interfaces/file';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.sass',
  imports: [
    AddFileComponent
  ],
})
export class MainPageComponent {

  constructor( private fs: FileService ) {}

  public saveFile(file: File) {
    this.fs.addFile(file);
  }
}
