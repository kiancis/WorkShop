import { Component, OnInit } from '@angular/core';
import { Accounts } from 'src/app/Shared/models/Dtos/accounts.models';
import { accountService } from 'src/app/Shared/services/accounts.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {
  accounts: Accounts[] = [];

  constructor(private accountService: accountService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(){
    this.accountService.gets().subscribe(data => {
      this.accounts = data;
    }, error => {
      alert(error);
    });
  }

  deleteAccounts(accountId:number){
    this.accountService.delete(accountId).subscribe(() =>{
      alert('Se eliminó la data correctamente');
      this.getAccounts();
    }, () =>{
      alert('Hubo un error eliminando la data')
    });
  }
}
