import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, -2, 15]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);