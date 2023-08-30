import { BaseModel } from "../Base/base.models";

export interface Card extends BaseModel{
  ammount:number
  balance:number
  cardNumber:string
  cardType:number
  createdAt:number
  id:number
  status:number
  updatedAt:Date
  userId:number
}
