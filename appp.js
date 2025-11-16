let btn = document.querySelector("#btn1");
let h3 = document.querySelector("h3");
let img = document.querySelector("img");
let btn2 = document.querySelector("#btn2");

btn.addEventListener("click", async () =>{
     let output = await joke();
     console.log(output);
     h3.innerText = output;
     let output2 =  await dogimg();
     console.log(output2);
     img.src = output2;
});



let url = 'https://official-joke-api.appspot.com/random_joke';

async function joke() {
    try {   
    let res = await axios.get(url);
    return res.data.setup + " ------------- " + res.data.punchline;
    } catch (err) {
        console.log("error - ",err); 
        return "no fact found";
    }
}

let url2 = "https://dog.ceo/api/breeds/image/random";

async function dogimg() {
    try {
        let res2 = await axios.get(url2);
        return res2.data.message;
    } catch (e) {
        return "no image found";
    }
}

let url3 = "http://universities.hipolabs.com/search?name=";


btn2.addEventListener("click", async () =>{
    country = document.querySelector("input").value;
    let output3 = await universities(country);
    console.log(output3);
    showlist(output3);
})

function showlist(output3){
        let list = document.querySelector("#list");
        for (cllg of output3) {
            console.log(cllg.name);

            let li = document.createElement("li");
            li.innerText = cllg.name;
            list.appendChild(li);
        }
    };



async function universities(country) {
    try {
        let res3 = await axios.get(url3 + country);
        return res3.data;
    } catch(er){
        console.log(er);
    }
}
