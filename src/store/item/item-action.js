import { ITEM_TYPE } from "./item-type";

export const addFood = (item) => ({
  type:ITEM_TYPE.ADD_FOOD,
  payload:item,
});

export const decreaseFood = (item) =>({
  type: ITEM_TYPE.DECAREASE_FOOD,
  payload:item,
})

export const foods = (food) => ({
  type: ITEM_TYPE.FOOD_FOODS,
  payload: food,
})

export const removeFood = (item) => ({
  type: ITEM_TYPE.REMOVE_FOOD,
  payload: item,
})

export const userData = (item) => ({
  type: ITEM_TYPE.USER_DATA,
  payload: item,
})


export const foodsData = (item) => ({
  type: ITEM_TYPE.FOODS_DATA,
  payload: item,
})

export const promaCode = (item) => ({
  type: ITEM_TYPE.PROMO_CODE,
  payload: item,
})

export const showModal = (item) => ({
  type: ITEM_TYPE.SHOW_MODAL,
  payload: item,
})
export const modalCard = (item) => ({
  type: ITEM_TYPE.MODAL_CARD,
  payload: item,
})


