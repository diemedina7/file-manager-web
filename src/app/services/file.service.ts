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
    return [...this._files];
  }

  addFile(file: File): void {
    if (file.name.trim().length == 0 || file.content.trim().length == 0) {
      alert("archivo incorrecto");
      return;
    }

    this._files.push(file);
    console.log("archivo agregado");
    console.log(this.files);

    localStorage.setItem("files", JSON.stringify(this._files));

    // const newPersonaje: Personaje = { id: uuid(), ...personaje }
    // file.id = uuid();
  }
}
