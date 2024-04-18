const input = document.querySelector(".input");
const btn = document.querySelectorAll(".btn");

// example 1

// function click() {
//     for (let i = 0; i < btn.length; i++) {
//         btn[i].addEventListener("click", (e) => {
//             let inputField = e.target.value;
//             if (inputField === "AC") {
//                 input.value = "";
//             } else if (inputField === "DE") {
//                 input.value = input.value.slice(0, -1);
//             } else if (inputField === "=") {
//                 input.value = eval(input.value);
//             } else {
//                 input.value += inputField;
//             };
//         });
//     };
// };

// click();


// example 2

// function click2() {
//     btn.forEach((i) => {
//         i.addEventListener("click", (e) => {
//             let inputField = e.target.value;
//             if (inputField === "AC") {
//                 input.value = "";
//             } else if (inputField === "DE") {
//                 input.value = input.value.slice(0, -1);
//             } else if (inputField === "=") {
//                 input.value = eval(input.value);
//             } else {
//                 input.value += inputField;
//             };
//         });
//     });
// };
// click2();


// example 3

function click3(number) {
    input.value += number;
};

function deleteAll() {
    input.value = '';
};

function deleteOne() {
    input.value = input.value.slice(0, -1);
};

function evaluation() {
    input.value = eval(input.value);
};
