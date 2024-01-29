const userInput = document.getElementById("date");
let result = document.getElementById("result");

// This code sets the maximum allowed date for a user input to the 
//current date by converting it to a string and extracting the date part. 
userInput.max = new Date().toISOString().split("T")[0];
console.log(userInput.max)

function calculateAge() {
    let birthDate = new Date(userInput.value);
console.log(birthDate)
    let d1 = birthDate.getDay();
    let m1 = birthDate.getMonth() + 1; //because month starts counting from 0
    let y1  = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDay();
    let m2  = today.getMonth() + 1; //because month starts counting from 0
    let y2 = today.getFullYear();

    let y3, m3, d3;

    y3 = y2 - y1;

    if(m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 -d1;
    }

    if(m3 < 0) {
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and  <span>${d3}</span> days old.`;
}


function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}