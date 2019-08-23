console.log('here we go');
//一个promise
// new Promise( (resolve,reject) => {
//     setTimeout( () => {
//         resolve('hello');
//     },2000);
//     //reject('wrong');
// }).then( value => {
//     console.log(value + ' world');
// },val => {
//     console.log(val + ' world');
// }) 

//两步执行示例
// new Promise( resolve => {
//     setTimeout( () => {
//         resolve('hello');
//     },2000);
// }).then( value => {
//     console.log(value);
//     return new Promise( resolve => {
//         setTimeout( () => {
//             resolve('world');
//         },2000);
//     });
// }).then( value => {
//     console.log(value + ' world');
// })

//promise执行完后再执行.then()
// let promise = new Promise( resolve => {
//     setTimeout( () => {
//         console.log('promise fulfilled');
//         resolve('hello');
//     }, 1000)
// });

// setTimeout( () => {
//     promise.then( value => {
//         console.log(value);
//     });
// },3000);

//then中不返回promise
// new Promise( resolve => {
//     setTimeout(()=>{
//         resolve('hello');
//     },1000)
// }).then( value => {
//     console.log(value);
//     console.log('world');
//     (function () {
//         return new Promise(resolve => {
//             setTimeout( () => {
//                 console.log('Mr.L');
//                 resolve('xmas');
//             },2000)
//         })
//     }());
//     return false;
// }).then( value => {
//     console.log(value + ' world');
// });
//.then()中嵌套.then(),每个then都是返回一个新的promise实例
//错误处理，返回reject状态，执行catch的捕获错误或者自带reject函数捕获错误
//.catch()+.then()
//promise常用函数:
//promise.all([p1,p2,p3]);与.map()的连用;实现队列用then(),forEach,reduce();所有完成则代表完成
//实现爬虫使用队列
//promise.resolve();无参，有参，参数是promise实例，参数是thenable-then();
//promise.reject();返回一个rejected状态的promise实例;不认thenable
//promise.race([p1,p2]);类似.all();任意一个执行完成则代表执行完成
//把回调包装成promise
//把任意异步操作包装成promise
//jquery3.0之后版本中实现promise
//IE中兼容问题:只实现队列:jQuery.defered;兼容所有平台：Bluebird,promise ployfill
//fetch API的使用
//异步函数：ES2017新增运算符关键字:async/await 需要使用promise
//MDN的async和await文档