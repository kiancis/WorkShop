import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Accounts } from 'src/app/Shared/models/Dtos/accounts.models';
import { accountService } from 'src/app/Shared/services/accounts.service';

@Component({
  selector: 'app-accounts-form',
  templateUrl: './accounts-form.component.html',
  styleUrls: ['./accounts-form.component.scss'],
})
export class AccountsFormComponent implements OnInit {
  public form: FormGroup = new FormGroup([]);

  constructor(
    private accountService: accountService,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.setData();
  }

  public submit(): void {
    let accountId = this.activeRouter.snapshot.paramMap.get('id');

    const account: Accounts = {
      ...this.form.value,
    } as Accounts;

    account.id = accountId as any

    account.status = Number(account.status);

    if(account.id == null) this.createAccount(account);

    else this.editAccount(account);
  }

  private createAccount(account: Accounts) {
    this.accountService.post(account).subscribe(
      () => {
        alert('Se creó correctamente');
      },
      () => {
        this.resetForm();
        alert('Erro al crear la data');
      }
    );
  }

  private editAccount(account: Accounts) {
    let accountId = this.activeRouter.snapshot.paramMap.get('id');

    this.accountService.put(account).subscribe(
      () => {
        alert('Se editó la cuenta correctamente');
      },
      () => {
        alert('Hubo error al editar la cuenta');
      }
    );
  }

  private initializeForm(): void {
    this.form = new FormGroup({
      accountNumber: new FormControl('', [Validators.required]),
      accountType: new FormControl(0, [Validators.required]),
      balance: new FormControl('', [Validators.required]),
      status: new FormControl(0, [Validators.required]),
      userId: new FormControl('', [Validators.required]),
    });
  }

  private setData(): any {
    let accountId = this.activeRouter.snapshot.paramMap.get('id');

    if (accountId != null) {
      this.accountService.get(accountId).subscribe((data) => {
        this.form.patchValue({
          ...data,
        });
      });
    }
  }

  private resetForm(): void {
    this.form.reset();
  }

  public get accountStatus(): any[] {
    return [
      {
        key: 1,
        value: 'Activo',
      },
      {
        key: 2,
        value: 'Inactivo',
      },
    ];
  }

  public get accountType(): any[] {
    return [
      {
        key: 1,
        value: 'Checking',
      },
      {
        key: 2,
        value: 'Saving',
      },
    ];
  }
}
