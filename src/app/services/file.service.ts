import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { File } from '../interfaces/file';
import { isPlatformBrowser } from '@angular/common';

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

  addFile(file: File): void {
    if (file.name.trim().length == 0 || file.content.trim().length == 0) {
      alert("archivo incorrecto");
      return;
    }

    this._files.push(file);
    localStorage.setItem("files", JSON.stringify(this._files));

    console.log("archivo agregado");
    console.log(this.files);

    // const newPersonaje: Personaje = { id: uuid(), ...personaje }
    // file.id = uuid();
  }
}
