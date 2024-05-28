import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { File } from '../interfaces/file';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private _files: File[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  get files(): File[] {
    if (isPlatformBrowser(this.platformId)) {
      const files = localStorage.getItem("files");
      this._files = files ? JSON.parse(files) : [];
      return this._files;
    } else {
      return [];
    }
  }

  public addFile(file: File): void {
    if (file.name.trim().length == 0 || file.content.trim().length == 0) {
      alert("archivo incorrecto");
      return;
    }

    file.id = uuid();

    this._files.push(file);
    localStorage.setItem("files", JSON.stringify(this._files));

    console.log("archivo agregado");
    console.log(this.files);

    // const newFile: File = { id: uuid(), ...file }
  }

  public deleteFile(fileId: string) {
    let resFiles = this._files.filter(file => file.id != fileId);
    if (resFiles.length == 0)
      alert("El archivo a eliminar no existe");

    this._files = resFiles;
    localStorage.setItem("files", JSON.stringify(this._files));
  }
}
