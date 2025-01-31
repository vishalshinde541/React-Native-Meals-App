import { createContext, useState } from "react";

const FavoritesContext = createContext({
  ids: [],
  addToFavorite: (id) => {},
  removeFromFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currentMealIds) => [...currentMealIds, id]);
  }

  function removeFavorite() {
    setFavoriteMealIds((currentMealIds) =>
      currentMealIds.filter(mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
