import Decimal from 'decimal.js';

export function calculateOrderTotal(items: Array<{ quantity: number; unitPrice: number }>) {
  return items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
}

export function calculateWithTax(amount: number, taxRate: number) {
  const subtotal = new Decimal(amount);
  const tax = subtotal.mul(taxRate).div(100);
  return {
    subtotal: subtotal.toNumber(),
    tax: tax.toNumber(),
    total: subtotal.add(tax).toNumber()
  };
}

export function applyDiscount(amount: number, type: 'percentage' | 'fixed', value: number) {
  const original = new Decimal(amount);
  const discount = type === 'percentage' 
    ? original.mul(value).div(100)
    : new Decimal(value);
  
  return {
    original: original.toNumber(),
    discount: discount.toNumber(),
    final: original.sub(discount).toNumber()
  };
}
