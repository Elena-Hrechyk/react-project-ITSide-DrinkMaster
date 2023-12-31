export const selectUsername = (state) => state.auth.user.name;

export const selectIsLogin = (state) => state.auth.isLogin;

export const selectEmail = (state) => state.auth.user.email;

export const selectIsUpdating = (state) => state.auth.isUpdating;

export const selectUserData = (state) => state.auth.user;

export const selectFavoriteDrinks = (state) => state.auth.user.favorite;

export const selectIsError = (state) => state.auth.error;

export const selectIsLoading = (state) => state.auth.isLoading;

