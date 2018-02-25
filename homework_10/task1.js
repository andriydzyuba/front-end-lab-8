// Debounce function

function debounce(firstArgument, secondArgument) {
  let limitRate = null;

  return function() {
    if (limitRate) {
      clearTimeout(limitRate);
    }
    limitRate = setTimeout(firstArgument, secondArgument);
  }
}

// Example

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

let increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'
