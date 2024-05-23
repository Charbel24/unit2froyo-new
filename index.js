const userInputstring = prompt(
)

 // Split the string of numbers into an array of strings.
const stringArray = userInputstring.split(",");
console.log ( "An array of Your flavors: ", stringArray )

const flavors = {

}  

 stringArray.forEach(flavor => {
    if (flavors[flavor]) {
        flavors[flavor]++;
    } else {
        flavors[flavor]= 1;
    }
 });
 console.table(flavors)




 