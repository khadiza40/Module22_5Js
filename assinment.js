//1 no problem solve answer --> seer To Mon
//function start with parameter as seer value
function seerToMon(seer) {
    //if enter string or other key then throw this error line
    if (typeof seer != 'number') {
        return "please enter a number!";

    }
    //if enter negative or other key then throw this error line
    if (seer < 40) {
        return "please enter valid number which is greater than 39!";

    }
    //calculation to get seer to mon 
    let mon = (1 * seer) / 40;
    //return mon value
    return mon;
}
//function end

console.log(seerToMon(80));
console.log(seerToMon(160));
console.log(seerToMon(320));
console.log(seerToMon("we"));
console.log(seerToMon(-23));
console.log(seerToMon(23));
console.log(seerToMon(400));
console.log(seerToMon(430));