export const formatPrice = (amount: number) => {
   return amount.toLocaleString('en-IN', {
      style: "currency",
      currency: "INR",
      currencySign: "standard",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
   })
}
