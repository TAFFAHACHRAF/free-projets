import { SocialPlatform } from "./enums";

export interface SocialDTO {
    id: string,
    socialPlatform: number;
    socialUrl: string;
    profileId: string;
  }