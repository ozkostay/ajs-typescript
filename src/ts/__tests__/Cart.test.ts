import Cart from '../service/Cart';
import Book from '../domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add to card', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  expect(cart.items.length).toBe(1);
});

test('sum and sum whith discount of card', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 1000, 1225));
  cart.add(new Book(1002, 'War and Piece', 'Leo Tolstoy', 1000, 1225));
  expect(cart.cartSum()).toBe(2000);
  expect(cart.cartSumDiscount(10)).toBe(1800);
});

test('sum and sum whith discount of card', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 1000, 1225));
  cart.add(new Book(1002, 'War and Piece', 'Leo Tolstoy', 1000, 1225));
  cart.deleteItem(1002);
  expect(cart.items.length).toBe(1);
});
