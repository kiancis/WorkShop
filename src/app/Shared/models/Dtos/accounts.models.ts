import { BaseModel } from "../Base/base.models";

export interface Accounts extends BaseModel{
  accountNumber:string;
  accountType:number;
  balance:number;
  createdAt:Date;
  id:number;
  status:number;
  updatedAt:Date;
  userId:number
}
