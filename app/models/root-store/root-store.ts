import {Instance, SnapshotOut, types} from 'mobx-state-tree';
import {UserStore} from '../user-store/user-store';

/**
 * A RootStore model.
 */
// prettier-ignore
//other stores goes here
export const RootStoreModel = types
         .model('RootStore', {
           userStore: types.optional(UserStore, () =>
             UserStore.create({
               isAuthenticated: false,
               onboarded: false,
             }),
           ),
         })
         .props({});

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
