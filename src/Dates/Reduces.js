export const typesActions = {
  AggCart: "/@addCart",
  viewCart: "/@cart",
  CalculoT: "/@Calc",
  deleteItem: "/@deleteItem",
};

export const ReduceFunctions = (stateCart = [], action) => {
  switch (action.type) {
    case typesActions.AggCart:
      let Repetido = stateCart.every(
        (repetido) => repetido.id !== action.dates.id
      );
      if (Repetido) {
        return [...stateCart, action.dates];
      } else {
        return [...stateCart];
      }

    case typesActions.CalculoT:
      let find = stateCart.findIndex((x) => x.id === action.cant.id);
      stateCart[find].cantidad = action.cant.cantidad;
      stateCart[find].subtotal = action.cant.subt;

      return [...stateCart];

    case typesActions.deleteItem:
      let ItemDelete = stateCart.findIndex((x) => x.id === action.deleteId);
      stateCart.splice(ItemDelete, ItemDelete + 1);
      console.log(stateCart);

      return stateCart;

    default:
      break;
  }
};
