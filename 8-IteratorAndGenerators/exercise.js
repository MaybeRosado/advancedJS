//Create a generetaor called gen
//Inside the generetor body do the following:
//Create a variable cvalled i and set the initial value to 1. Then, create and inifiite while loop.
//In the body of the while loop, yield i and set i to i * 2
//Initialize gen and save it into a variable called generator
//Call your generator several times and log the results to see the value change.

function *gen(){
    let i = 1
    while(true){
        yield i;
        i = i * 2
    }
}

const generator = gen();

console.log(generator.next(), generator.next(), generator.next());