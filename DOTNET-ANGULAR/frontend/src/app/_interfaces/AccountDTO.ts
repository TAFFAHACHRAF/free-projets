import { AccountType } from "./enums";
import { ProfileDTO } from "./ProfileDTO";

export class AccountDTO {
  accountType?: AccountType;
  mail?: string;
  password?: string;
  isActive: boolean;
  suscriberId: string;
  profiles?: ProfileDTO[] | null;
  maxProfileNumber?: number | null;
  currentProfileNumber?: number | null;
  createdAt: string;
  updatedAt: string;

  constructor(
    isActive: boolean,
    suscriberId: string,
    createdAt: string,
    updatedAt: string,
    accountType: AccountType,
    mail: string,
    password: string,
    profiles: ProfileDTO[] | null,
    maxProfileNumber: number | null,
    currentProfileNumber: number | null
  ) {
    this.isActive = isActive;
    this.suscriberId = suscriberId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.accountType = accountType;
    this.mail = mail;
    this.password = password;
    this.profiles = profiles;
    this.maxProfileNumber = maxProfileNumber;
    this.currentProfileNumber = currentProfileNumber;
  }
}
