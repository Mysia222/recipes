import React, { createContext } from "react";
import { action, observable } from "mobx";
import { IHashtag } from "../models/hashtag";
import { HASHTAGS } from "../shared/constants";

import { makeAutoObservable } from "mobx";
export default class HashtagStore {
  constructor() {
    makeAutoObservable(this);
  }
  hashtags: IHashtag[] = [];
  getHashtags() {
    return this.hashtags;
  }
  async loadHashtags() {
    fetch("/api/hashtags/")
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((json) => {
        this.hashtags = json;
      });
  }
}
