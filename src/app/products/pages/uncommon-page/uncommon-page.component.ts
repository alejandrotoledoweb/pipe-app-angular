import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  public name: string = 'Alejandro'
  public gender: 'male' | 'female' = 'male'
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }
  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  changeClient(): void {
    this.name = 'Melissa'
    this.gender = 'female'
  }

  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Eduardo', 'Melissa', 'Natalia', 'Ximena']

  public person = {
    name: 'Carla',
    age: 35,
    address: 'Ottawa, Canada'
  }

  deleteClient(): void {
    this.clients.pop()
  }

  // Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap: ', value))
  );

  public promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500)
  })


}
