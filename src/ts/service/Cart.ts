import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    cartSum(): number {
        const sum = this._items.reduce((sum, item) => sum + item.price, 0);
        return sum;
    }

    cartSumDiscount(discount: number): number {
        const sum = this._items.reduce((sum, item) => sum + item.price, 0);
        return sum / 100 * (100 - discount);
    }

    deleteItem(id: number): void {
        this._items.forEach((item, index) => {
            if(item.id === id) {
                this._items.splice(index, 1);
                return;
            }
        });
    }
}
