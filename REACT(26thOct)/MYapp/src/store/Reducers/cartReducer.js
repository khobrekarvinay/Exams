const cartInitialState = {
    items: [],
  };
  
  const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART': {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem) {
          return {
            ...state,
            items: state.items.map(item =>
              item.id === existingItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {

          return {
            ...state,
            items: [...state.items, { ...action.payload, quantity: 1 }],
          };
        }
      }
   
      case 'REMOVE_FROM_CART': {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
        };
      }
  
      case 'INCREMENT_QUANTITY': {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
  
      case 'DECREMENT_QUANTITY': {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem.quantity === 1) {
          return {
            ...state,
            items: state.items.filter(item => item.id !== action.payload.id),
          };
        } else {
          return {
            ...state,
            items: state.items.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          };
        }
      }
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  