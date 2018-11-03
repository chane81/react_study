import React from "react";

import { types } from "mobx-state-tree";

const data = {
  name: "Toy Box",
  price: 500,
  image: "http://image.ceci.co.kr/upload/ARTICLEINFOCON/1475859091752no2r3.jpg"
};

export const WishItem = types
  .model({
    name: types.string,
    price: types.number,
    image: types.string
  })
  .actions(self => ({
    changeName(newName) {
      self.name = newName;
    },
    changePrice(newPrice) {
      self.price = newPrice;
    },
    changeImage(newImage) {
      self.image = newImage;
    }
  }));

export const WishList = types
  .model({
    items: types.optional(types.array(WishItem), [])
  })
  .actions(self => ({
    add(item) {
      self.items.push(item);
    }
  }));
