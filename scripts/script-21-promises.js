//21: promises.
//the real world analogy: If you finish painting the fence, I promise to give you cake.
//second thing happens only if first thing finishes.
//promises are the same was in TS

//22: fetch.
//a way to load data.

//this promise is stated as resolved (aka done)
let promise = Promise.resolve('Fence is painted.');   //.resolve and .reject are the two most important methods in the Promise class.
promise.then(() => {
    console.log("Promise fulfilled.");
}
)  //.then is the most common condition. 
//this will log "Promise fulfilled" in the console.

//this promise takes two args: resolve and reject.
//it has options depending on if the first task gets done or not.
let myPromise = new Promise((resolve, reject) => {
    let finishedWork = true;
    if (finishedWork) {
        resolve();
    }
    else {
        reject();
    }
})

//if finishedWork is true, the first block will print in the console.
//if it's false, you'll get a console error UNLESS
//you catch it
myPromise.then(() => {
    console.log('Fence is painted. You get cake.');
}).catch(() => {
    console.log('Fence is not finished. No cake for you!');
})

//so far you don't really have any async going on. it's more just plain old if/else stuff. so...

function getData(method, url) {
    return new Promise((resolve, reject) => {
        //jsonplaceholder.typicode.com:
        //a fake online rest api for testing
        //you can get URLs with some fake test data.

        //some of this syntax is outside the scope of the typesript lesson.
        //don't worry too much -- you'll see we make a new http request here
        //and resolve/reject check the responses
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            }
            else {
                reject({
                    status: this.status,
                    statusText: this.statusText
                });
            }
        };

        xhr.onerror = function () {
            //just the same code as the reject above:
            reject({
                status: this.status,
                statusText: this.statusText
            });
        }

        xhr.send(); //sends the request

    })
}

//now call the http at the test site URL:
//your results will be in the network/response tabs of the browser dev tools.
//i think getData is some built-in function
getData('GET', 'https://jsonplaceholder.typicode.com/users')
    .then((data) => {
        console.log('Promise resolved. ' + data);
    });

//another way: getData, but the then will call another function to do what you want:
function printData(data) {
    console.log(JSON.parse(data));
}

getData('GET', 'https://jsonplaceholder.typicode.com/users')
    .then(printData); //note the syntax of calling printData. it's not what you expected.

//lesson 22: another way to fetch data, using fetch.
//it will happen.

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())  //res.json is response and a method called json, which converts data to json.
    .then(console.log);
    //check the console log
    //reminder that arrow syntax doesn't need to be fancy if there are no arguments and it's only one line.