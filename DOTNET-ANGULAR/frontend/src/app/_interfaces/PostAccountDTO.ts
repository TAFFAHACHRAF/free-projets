import { AccountType } from "./enums";

 export interface PostAccountDTO  {
    accountType?: AccountType;
    mail?: string;
    password?: string;
    isActive: boolean;
    suscriberId: string;
    maxProfileNumber?: number;
    currentProfileNumber?: number;
    createdAt: Date;
    updatedAt: Date;
}