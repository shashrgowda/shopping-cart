const discountLogic = (cart) => {
  let items = 0;
  let price = 0;
  let actualPrice = 0;
  cart.forEach((item) => {
    items += item.qty;
    actualPrice += item.qty * item.price;
    const itemTotal = item.price * item.qty;
    const threshold = item.qty / item.discountQty;
    const quotient = Math.floor(item.qty / item.discountQty);

    switch (item.id) {
      case 1:
        price +=
          item.qty % item.discountQty === 0
            ? itemTotal - item.qty + threshold
            : itemTotal - item.qty + threshold + item.price - item.discountQty;
        break;

      case 2:
        price +=
          item.qty % item.discountQty === 0
            ? itemTotal - item.price
            : (itemTotal - item.price * (item.qty - 1)) * item.qty -
              item.price * quotient;
        break;

      default:
        price += item.qty * item.price;
        break;
    }
  });

  return {
    items,
    price,
    actualPrice,
  };
};

const Helper = {
  discountLogic: (cart) => discountLogic(cart),
};

export default Helper;
