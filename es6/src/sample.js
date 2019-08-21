console.log('here we go');
new Promise( (resolve,reject) => {
    setTimeout( () => {
        resolve('hello');
    },2000);
    //reject('wrong');
}).then( value => {
    console.log(value + ' world');
},val => {
    console.log(val + ' world');
}) 