import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { Modal } from 'bootstrap';

import { File } from '../../interfaces/file';

@Component({
  selector: 'app-add-file',
  standalone: true,
  templateUrl: './add-file.component.html',
  styleUrl: './add-file.component.sass',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
})
export class AddFileComponent {
  @ViewChild('modalNewFile') modal!: ElementRef;

  public formFile: FormGroup = this.fb.nonNullable.group({
    fileNameControl:      new FormControl('', [Validators.required]),
    fileContentControl:   new FormControl('', [Validators.required])
  });

  @Output()
  public newFile: EventEmitter<File> = new EventEmitter<File>();

  constructor( private fb: FormBuilder, private modalService: NgbModal ) {}

  public getDataFile() {
    if (this.formFile.invalid) {
      this.formFile.markAllAsTouched();
      return;
    }

    let fileName: string = this.formFile.get("fileNameControl")?.value;
    let fileContent: string = this.formFile.get("fileContentControl")?.value;

    let newFile: File = {
      name: fileName,
      content: fileContent,
      date: new Date()
    }

    this.newFile.emit(newFile);
    this.formFile.reset();
  }

  public isValidField( field: string ): boolean | null {
    return this.formFile.controls[field].errors && this.formFile.controls[field].touched;
  }

  public getFieldError( field: string ): string | null {
    if ( !this.formFile.contains(field) )
      return null;

    const errors = this.formFile.controls[field].errors || {};

    for (const error of Object.keys(errors)) {
      switch(error) {
        case 'required':
          return 'Este campo es requerido';
      }
    }

    return null;
  }

  public openModal(): void {
    // this.modalService.open(modalNewFile);
    // const mod = new Modal(this.modal.nativeElement);
    // modal2.show();
  }
}
