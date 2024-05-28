import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FileService } from '../../services/file.service';
import { File } from '../../interfaces/file';

@Component({
  selector: 'app-delete-files',
  standalone: true,
  imports: [],
  templateUrl: './delete-files.component.html',
  styleUrl: './delete-files.component.sass'
})
export class DeleteFilesComponent {
  @Input("fileId")
  public fileId: string = "";

  @Output("files")
  public files: EventEmitter<File[]> = new EventEmitter<File[]>();

  constructor( private fs: FileService ) {}

  public deleteFile(fileId: string): void {
    if (confirm("¿Desea eliminar el archivo seleccionado?")) {
      this.fs.deleteFile(fileId);
      this.files.emit(this.fs.files);
    }
  }
}
