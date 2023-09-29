export const selectDrinks = (state) => state.drinks.items;
export const selectPopular = state => state.drinks.popular;
export const selectIsLoading = (state) => state.drinks.isLoading;
export const selectError = (state) => state.drinks.error;
