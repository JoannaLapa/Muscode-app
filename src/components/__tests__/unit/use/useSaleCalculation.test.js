import { useSaleCalculation } from '@/use/useSaleCalculation.js';

it('should calculate a sale percent', () => {
    const { countSale } = useSaleCalculation();
    const sale = countSale(600, 800);
    
    expect(sale).toBe(`-25%`)
})
