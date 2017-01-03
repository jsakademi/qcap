export class Product {
    _id?: string;
    amount: number;
    code: string;
    maxStock: number;
    minStock: number;
    name: string;
    supplier: string;
    type: 'rawMaterial' | 'supplyMaterial' | 'product';
    unit: string;
}