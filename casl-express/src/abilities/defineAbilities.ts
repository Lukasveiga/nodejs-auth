import { AbilityBuilder, createMongoAbility, defineAbility, MongoAbility } from '@casl/ability';

export enum Actions {
    Manage = 'manage',
    Read = 'read',
    Update = 'update',
    Delete = 'delete'
}

export enum Subjects {
    User = 'User',
    Settings = 'Settings',
    Report = 'Report',
    All = 'all'
}

export type AppAbility = MongoAbility<[Actions, Subjects]>;

export function defineAbilitiesFor(role: string): AppAbility {
    const { can, cannot, build } = new AbilityBuilder<AppAbility>(createMongoAbility);

    if (role === 'admin') {
        can(Actions.Manage, Subjects.All)
        return build();
    }

    if (role === 'assistent') {
        can(Actions.Read, Subjects.User)
        can(Actions.Update, Subjects.User)
        cannot(Actions.Delete, Subjects.User)
        can(Actions.Read, Subjects.Report)
        cannot(Actions.Manage, Subjects.Settings)
        return build();
    }

    can(Actions.Read, Subjects.Report)
    return build();
}
