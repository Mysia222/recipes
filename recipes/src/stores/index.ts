import React from "react";
import TagsStore from "./tagsStore";
import RecipeStore from "./recipeStore";
class RootStore {
  tagsStore: TagsStore;
  recipeStore: RecipeStore;
  constructor() {
    this.tagsStore = new TagsStore();
    this.recipeStore = new RecipeStore();
  }
}

const StoresContext = React.createContext(new RootStore());

export const useStores = () => React.useContext(StoresContext);
