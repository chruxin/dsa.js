import {MaxHeap} from './heap';
// Initialize a max-heap. Compare directly the elements.
console.log('make a max heap');
let maxHeap = new MaxHeap( (element) => {return element} );
maxHeap.insert(5);
maxHeap.insert(7);
maxHeap.insert(2);
maxHeap.insert(10);
maxHeap.insert(6);
maxHeap.insert(8);
maxHeap.insert(9);
maxHeap.insert(12);
maxHeap.print();
console.log('delete max');
maxHeap.deleteMax();
maxHeap.print();