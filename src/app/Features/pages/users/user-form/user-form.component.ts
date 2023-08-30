import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Shared/models/Dtos/user.models';
import { UserService } from 'src/app/Shared/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  public form: FormGroup = new FormGroup([]);
  public user!: User;

  constructor(
    private userService: UserService,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.setData();
  }

  private initializeForm(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      idNumber: new FormControl('', [Validators.required]),
      status: new FormControl(0, [Validators.required]),
      address: new FormGroup({
        city: new FormControl('', [Validators.required]),
        street: new FormControl('', [Validators.required]),
        number: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        zip: new FormControl('', [Validators.required]),
      }),
    });
  }

  public submit(): void {
    let userId = this.activeRouter.snapshot.paramMap.get('id');

    const user: User = {
      ...this.form.value,
    } as User;

    user.id = userId  as any;

    user.status = Number(user.status);

    if(user.id == null) this.createUser(user);

    else this.editUser(user);
  }

  public editUser(user: User): void {
    this.userService.put(user).subscribe(
      () => {
        alert('se editó el usuario correctamente');
        this.resetForm();
      },
      () => {
        alert('Error al editar el usuario');
        this.resetForm();
      }
    );
  }

  public createUser(user: User): void {
    this.userService.post(user).subscribe(
      () => {
        alert('Se creó el usuario correctamente');
        this.resetForm();
      },
      () => {
        alert('Error al crear el usuario');
        this.resetForm();
      }
    );
  }

  private setData() : any {
    let userId = this.activeRouter.snapshot.paramMap.get('id')

    if(userId != null){
      this.userService.get(userId).subscribe((data) =>{
        this.form.patchValue({
          ...data
        });
      });
    }
  }

  private resetForm(): void {
    this.form.reset();
  }

  public get userStatus(): any[] {
    return [
      {
        key: 1,
        value: 'Activo',
      },
      {
        key: 2,
        value: 'Inactivo',
      },
      {
        key: 3,
        value: 'Pendiente',
      },
      {
        key: 4,
        value: 'Bloqueado',
      },
    ];
  }
}
