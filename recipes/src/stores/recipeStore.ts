import React, { createContext } from "react";
import { action, observable } from "mobx";
import { IRecipe } from "../models/recipe";
import noImage from "../images/no-image.jpg";

import { makeAutoObservable } from "mobx";
export default class RecipeStore {
  constructor() {
    makeAutoObservable(this);
  }
  imageList: any = [];

  getImageList() {
    return this.imageList;
  }

  addImage(image: string) {
    this.imageList.push({
      url: image,
    });
  }

  // async postImage(data: any) {
  //   fetch("/api/images", {
  //     method: "POST",
  //     body: data,
  //   })
  //     .then((response) => {
  //       if (!response.ok) throw Error(response.statusText);
  //       return response.json();
  //     })
  //     .then((json) => {
  //       console.info(json);
  //       this.imageList = json.fileList;
  //     });
  // }
}
