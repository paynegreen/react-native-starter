import {types} from 'mobx-state-tree';
import {User} from './user-model';
import {actions} from './user-action';
import {views} from './user-view';

export const UserStore = types
  .model('UserStore', {
    identifier: types.optional(types.identifier, 'UserStore'),
    user: types.maybe(User),
    isAuthenticated: types.boolean,
  })
  .actions((self) => actions(self))
  .views((self) => views(self));
