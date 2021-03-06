export const initialState = {
  cart: [],
  user: null,
};

// Selector
export const getCartTotal = (cart) =>
  cart?.reduce((sum, item) => sum + item.price, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };
    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex((item) => item.id === action.id);
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn("Item not in cart!");
      }
      console.log(newCart);
      return { ...state, cart: newCart };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
