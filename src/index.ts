import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([1, -4, 100, -100, -200]);
numbersCollection.sort()
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('ajsgdjas')
charactersCollection.sort()
console.log(charactersCollection.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-500)
linkedList.add(-100)
linkedList.add(50)

linkedList.sort();
linkedList.print()