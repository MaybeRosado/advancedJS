//Iterators:
//Iterators are a way to transverse a complicated data structure or chunk of large data. 
//Example:

function createIterator (arr){
    let currIndex = 0;
    return {
        next(){
            return currIndex < arr.length ? 
            {value: arr[currIndex++], done: false} :
            {done: true};
        }
    }
}

let it = createIterator(['Hello', 'World', '!!!']);
console.log(it.next()); // {value: 'Hello', done: false}
console.log(it.next()); // {value: 'World', done: false}
console.log(it.next()); // {value: '!!!', done: false}
console.log(it.next()); // {done: true}
console.log(it.next()); // {done: true}
console.log(it.next()); // {done: true}

//Iterators provides a way to transverse potentially complex collections of data
//And track the current position in the collection.

//Generators:
//Provides and iterative way of creating data collections. It can return values one at 
//a time, and pause execution until the next value is requested. 
//To create one we must define a function with an asterik in front of the function name
//and use the 'yield' keyword to return values one at a time.

// funtion *testGen(data) { yield data; }

//The asterik indicates that the function is a generator.
//The yield keyword is used to return a value from the generator.

function *gen(){
    let i = 0;
    while(true){
        yield i++;
    }
}