
import { CardDTO } from "./CardDTO";
import { SocialDTO } from "./SocialDTO";

export interface ProfileDTO {
    id: string;
    IsActive: boolean;
    TemplateIndex: number;
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    Address: string;
    CreatedAt?: Date | null;
    UpdatedAt?: Date | null;
    AccountId: string;
    Cards?: CardDTO[] | null;
    Socials?: SocialDTO[] | null;
    ImagePath?: string | null;
    Latitude: number;
    Longitude: number;
  }