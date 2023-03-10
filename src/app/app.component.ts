import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  form: FormGroup;
  Data: Array<any> = [
    { name: 'Teste', value: 'teste' },
    { name: 'Adicionar', value: 'adicionar' },
    { name: 'Editar', value: 'editar' },
    { name: 'Excluir', value: 'excluir' },
    { name: 'Listar', value: 'listar' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      funcoesArray: this.fb.array([], [Validators.required]),
    })
  }

  onCheckBoxChanges(e: any) {
    const funcoesArray: FormArray = this.form.get('funcoesArray') as FormArray;
    if (e.target.checked) {
      funcoesArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      funcoesArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          funcoesArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm() {
    console.log(this.form.value);
  }
}
