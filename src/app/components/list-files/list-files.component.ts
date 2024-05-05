import { Component, Input } from '@angular/core';
import { File } from '../../interfaces/file';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-files',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './list-files.component.html',
  styleUrl: './list-files.component.sass'
})
export class ListFilesComponent {

  @Input("files")
  public files: File[] = [];

}
