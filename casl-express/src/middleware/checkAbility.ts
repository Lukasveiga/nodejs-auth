import { NextFunction, Request, Response } from "express"
import { Actions, AppAbility, Subjects } from "../abilities/defineAbilities"

export const checkAbility = (action: Actions, subject: Subjects) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const ability = req.ability as AppAbility;

        if (ability.can(action, subject)) {
            next();
            return;
        }

        res.status(403).json({ message: 'Forbidden' });
        return;
    }
}