export const views = (self: any) => {
  return {
    get userToken() {
      return self.user.token;
    },
  };
};
