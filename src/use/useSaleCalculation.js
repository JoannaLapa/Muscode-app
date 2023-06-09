export function useSaleCalculation() {
  function countSale(sale, price) {
    const countedSale = Math.round(100 - (sale / price) * 100);
    return `-${countedSale}%`;
  };
  return { countSale };
}
