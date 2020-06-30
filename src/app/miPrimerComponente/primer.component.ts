import {Component} from '@angular/core'

@Component({
  selector:'hello-world',
  template:`<h1>Hola</h1>
  <p>{{hola}}<p>
  `
})
export class HelloWorld {
 hola="holis soy karo alyab "
}
