//Comparisions Video 15
var enteringPerson = "Ashik";
var age = 18;
var country = "Bangladesh";

var result = (enteringPerson =="Ashik" && age==18 && country=="Bangladesh") ? "Welcome" : "Thanks";

document.querySelector(".demo1").innerHTML = result;

//Function video 17
function taxCalculator(){
    var productPrice = 15000;
    var tax = 12;
    result = productPrice / 100 * tax;

    document.querySelector(".demo2").innerHTML = result;
}
taxCalculator();

// var car={
//     name: "Toyota Corolla",
//     price: "400000",
//     tax: "10",
//     wheelSize: "14",
//     adBanner : function(){
//         return this.name;
//     }
// }
// document.querySelector(".demo").innerHTML =car.adBanner();