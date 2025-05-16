import { AbilityBuilder, createMongoAbility, defineAbility, MongoAbility } from '@casl/ability';

export type Actions = 'manage' | 'read' | 'update' | 'delete';
export type Subjects = 'User' | 'Settings' | 'Report' | 'all';

export type AppAbility = MongoAbility<[Actions, Subjects]>;

export function defineAbilitiesFor(role: string): AppAbility {
    const { can, cannot, build } = new AbilityBuilder<AppAbility>(createMongoAbility);

    if (role === 'admin') {
        can('manage', 'all')
        return build();
    }

    if (role === 'assistent') {
        can('read', 'User')
        can('update', 'User')
        cannot('delete', 'User')
        can('read', 'Report')
        cannot('manage', 'Settings')
        return build();
    }

    can('read', 'Report')
    return build();
}
