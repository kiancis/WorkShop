import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/Shared/models/menu.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'WorkShop-Fe';
  menus:Menu[] =[
    {title:'User', img:'assets/images/usuario.png', route:'user/list'},
    {title:'Accounts', img:'assets/images/banco.png', route:'account/list'},
    {title: 'Cards', img: 'assets/images/credit-card.png' , route: 'card/list'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
