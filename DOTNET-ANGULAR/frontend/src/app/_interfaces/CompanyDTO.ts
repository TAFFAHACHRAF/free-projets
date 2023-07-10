import { AccountDTO } from "./AccountDTO";

export interface CompanyDTO{
    companyName: string;
    companyAddress: string;
    companyPhoneNumber?: string;
    account?: AccountDTO;
    CreatedAt?: Date;
    UpdatedAt?: Date;
}