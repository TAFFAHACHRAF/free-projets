import { AccountDTO } from "./AccountDTO";

export class UserDTO {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  birth: string;
  account?: AccountDTO;
  createdAt?: string;
  updatedAt?: string;

  constructor(
    firstName: string,
    lastName: string,
    phoneNumber: string,
    address: string,
    birth: string,
    account?: AccountDTO,
    createdAt?: string,
    updatedAt?: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.birth = birth;
    this.account = account;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

}
