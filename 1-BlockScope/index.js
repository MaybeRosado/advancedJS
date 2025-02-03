function fn1(){
    console.log('scope 1');
    let scope = 5;
    console.log(scope);
    {
        console.log('scope 2');
        let scope = 'Different scope';
        console.log(scope);

    }

    {
        console.log('Scope 3');
        let scope = 'a third scope'
        console.log(scope);

    }

}   
fn1(); 