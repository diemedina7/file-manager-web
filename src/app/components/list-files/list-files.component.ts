import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, afterRender } from '@angular/core';

import { DeleteFilesComponent } from '../delete-files/delete-files.component';
import { File } from '../../interfaces/file';
import { MainPageComponent } from '../main-page/main-page.component';
import { FileService } from '../../services/file.service';

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
export class ListFilesComponent implements OnInit {
  @Input("files")
  public files: File[] = [];

  constructor(private fs: FileService) {}

  ngOnInit(): void {
    // this.files = this.fs.files;
  }
}
