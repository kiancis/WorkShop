import { Address } from "./address.models";
import { BaseModel } from "../Base/base.models";

export interface User extends BaseModel {
  address: Address;
  birthDate: Date;
  email: string;
  firstName: string;
  idNumber: string;
  lastName: string;
  phoneNumber: string;
  status: number
}
