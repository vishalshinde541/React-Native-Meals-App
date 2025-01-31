import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addToFavorite: (id) => {},
  removeFromFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currentMealIds) => [...currentMealIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currentMealIds) =>
      currentMealIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addToFavorite: addFavorite,
    removeFromFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
