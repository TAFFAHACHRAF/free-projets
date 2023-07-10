import { PostAccountDTO } from "./PostAccountDTO";

export interface PostCompanyDTO{
    companyName: string;
    companyAddress: string;
    companyPhoneNumber?: string;
    account: PostAccountDTO;
    createdAt?: Date;
    updatedAt?: Date;
}