export const selectDrinks = (state) => state.drinks.items;
export const selectPopular = state => state.drinks.popular;
export const selectIsLoading = (state) => state.drinks.isLoading;
export const selectError = (state) => state.drinks.error;
export const selectTotalDrinks = (state) => state.drinks.total;
export const selectMainPageDrinks = (state) => state.drinks.mainPageDrinks;
export const selectDrinkById = (state, drinkId) =>
  state.drinks.drinks.find((drink) => drink._id === drinkId);
export const selectOwnDrinks = (state) => state.drinks.ownDrinks;
