import { Injectable } from '@angular/core';
import { File } from '../interfaces/file';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private _files: File[] = [];

  constructor() { }

  get files(): File[] {
    const files = localStorage.getItem("files");
    this._files = files ? JSON.parse(files) : [];
    return this._files;
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
