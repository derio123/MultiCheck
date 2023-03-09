import { FormBuilder, Validators, FormArray, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-check',
  templateUrl: './multi-check.component.html',
  styleUrls: ['./multi-check.component.css']
})
export class MultiCheckComponent implements OnInit {

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
  ngOnInit(): void { }

  onCheckBoxChanges(e: any) {
    const funcoesArray: FormArray = this.form.get('funcoesArray') as FormArray;
    console.log(funcoesArray);
    
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
