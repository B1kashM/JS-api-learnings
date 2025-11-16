let url = 'https://official-joke-api.appspot.com/random_joke';

fetch(url)
.then((res) => {
    console.log(res);
    return res.json();
})
.then((data1) =>{
    console.log(data1.setup);
    console.log(data1.punchline);
    return fetch(url);
})
.then((res) => {
    console.log(res);
    return res.json();
})
.then((data2) =>{
    console.log(data2.setup);
    console.log(data2.punchline);
})
.catch ((err) => {
    console.log("ERROR OCCURED", err);
});