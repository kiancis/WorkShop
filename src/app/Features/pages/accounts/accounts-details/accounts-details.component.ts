import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Accounts } from 'src/app/Shared/models/Dtos/accounts.models';
import { accountService } from 'src/app/Shared/services/accounts.service';

@Component({
  selector: 'app-accounts-details',
  templateUrl: './accounts-details.component.html',
  styleUrls: ['./accounts-details.component.scss']
})
export class AccountsDetailsComponent implements OnInit {
  account !: Accounts;

  constructor(private accountService: accountService, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    let accountId = this.activeRouter.snapshot.paramMap.get('id');

    this.accountService.get(accountId).subscribe(data =>{
      this.account = data;
    }, error =>{
      alert(error);
    });
  }
}
