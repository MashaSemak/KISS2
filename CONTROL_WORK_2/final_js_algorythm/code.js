
//Дано вещественное число A. Вычислить x = a**4,
//при a < 10; x=a при a> 61, в противном случае x = a − sin(a**2)

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;

const elementA= document.getElementById("a");


const elementVerify= document.getElementById("count");
elementVerify.addEventListener('click', calculateNumber);



function calculateNumber() {
    let a = parseFloat(elementA.value);
    console.log(a);
    

    if (a>61) {
        let x = a;
        console.log(x);
        x = Math.round(x * 100000.0) / 100000.0;
        result = x;
        document.getElementById("result").innerText = messageText + result;
        document.getElementById("x").value = x;
        console.log(document.getElementById("x").value);
        
    } else {
        if (a<10) {
            let x = a**4;
            console.log(x);
            x = Math.round(x * 100000.0) / 100000.0;
            result = x;
            document.getElementById("result").innerText = messageText + result;
            document.getElementById("x").value = 3;
            document.getElementById("x").value = x;
            console.log(document.getElementById("x").value);
        } else {
            let x = a-Math.sin(a**2);
            console.log(Math.sin(a**2))
            console.log(x);
            x = Math.round(x * 100000.0) / 100000.0;
            result = x;
            console.log(result);
            document.getElementById("result").innerText = messageText + result;
            document.getElementById("x").value = 3;
            document.getElementById("x").value = x;
            console.log(document.getElementById("x").value);
        }
    }
}

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);

let xvalue = document.getElementById("x").value;

