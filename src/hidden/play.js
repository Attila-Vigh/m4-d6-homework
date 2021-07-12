// const theGratestSmallPanda = {
//     name     : "Raia",
//     last     : "D'Arc",
//     age      : "ageless",
//     address  : "From hell to heaven and back, twice.",
//     city     : "hell",
//     country  : "heaven ",
//     plante   : "Venus",
// }

// document.body.innerHTML = 
//     Object
//         .keys( theGratestSmallPanda )
//         .map( prop =>  `<p id="${ prop }">
//                             ${ theGratestSmallPanda[prop] } 
//                         </p>`
//             )
//         .join("")



// for (const key of Object.keys(object)) {
//         console.log( key )


// }

// const form = Object.keys(object).map(name => document.getElementById(`#${name}`).value 
// ).join("")

const whatever = "stringStr"

console.log(Object.keys({ whatever })[0]);
console.log(Object.values(whatever).join(""));

const sum2Function = function () { return 2 + 2 }

console.log(sum2Function());

const sum2Arr = () => 1 + 2
console.log(sum2Arr());

const obj_1 = {
    two: 2,
    sum2Function: function () { console.log(this.two * 2) }
}
obj_1.sum2Function()

const obj_2 = {
    two: [2, 3, 4],
    sum2Function: this.two.map(number => number * number)

}

console.log(obj_2.two)