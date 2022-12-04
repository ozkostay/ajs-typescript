import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1009, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'Фантастика, боевик, приключения', 137, 800));

console.log(cart.items);

console.log('Сумма без скидки', cart.cartSum()); // Сумма без скидки
console.log('Сумма со скидкой', cart.cartSumDiscount(10)); // Сумма со скидкой
cart.deleteItem(1009); //Удаляем из корзины по ID = 1009

console.log('Корзина после удаления', cart.items);
