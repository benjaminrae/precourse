const getDiscountedPrice = (itemPrice, membershipType) => {
  const goldDiscount = 1 - 0.2;
  const silverDiscount = 1 - 0.1;

  const loyaltyLevel = membershipType.toLowerCase();

  if (loyaltyLevel === 'gold') {
    return itemPrice * goldDiscount;
  }

  if (membershipType === 'silver') {
    return itemPrice * silverDiscount;
  }

  return itemPrice;
};
