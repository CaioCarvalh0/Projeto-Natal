import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        height: '100vh',
      })),
      state('out', style({
        height: '0',
      })),
      transition('in => out', animate('500ms ease-in-out')),
      transition('out => in', animate('500ms ease-in-out')),
    ]),
  ],
})
export class LoginComponent  {
  state = 'in';

  FormCadastro: FormGroup

  emailEnter: string = 'amanda.a@gmail.com'
  senhaEnter: string = 'senha extremamente incrivel'

  constructor(
    private formBuilder: FormBuilder
  ){
    this.FormCadastro = this.formBuilder.group({
      email: [''],
      senha: ['']
    })

  }

  buttonEnter(){
     const forms = this.FormCadastro.value
      if(forms.email == this.emailEnter && forms.senha == this.senhaEnter){
        console.log('deu certo')
        this.state = this.state === 'in' ? 'out' : 'in';
      }else{
        console.log('nao deu')
      }
  }

}
