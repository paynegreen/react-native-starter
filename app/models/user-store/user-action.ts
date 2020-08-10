import {User} from './user-model';

export const actions = (self: any) => {
  return {
    createUser(userJson: any) {
      const user = User.create({
        ...userJson,
      });
      self.user = user;

      return user;
    },
    toggleAuthenticated(value: boolean) {
      self.isAuthenticated = value;
    },
    updateUser(user: any) {
      self.user = user;
    },
    logout() {
      self.isAuthenticated = false;
      self.user = undefined;
    },
    onboard(value: boolean) {
      self.onboarded = value;
    },
  };
};
