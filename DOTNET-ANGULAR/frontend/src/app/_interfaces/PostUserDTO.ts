import { PostAccountDTO } from "./PostAccountDTO";

export interface PostUserDTO {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    birth: Date;
    account: PostAccountDTO;
    createdAt?: Date;
    updatedAt?: Date;
  }