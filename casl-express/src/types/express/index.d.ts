import { AppAbility } from "../../abilities/defineAbilities";

declare global {
  namespace Express {
    interface Request {
      ability: AppAbility;
      userRole?: string;
    }
  }
}