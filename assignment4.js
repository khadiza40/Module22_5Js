//4 no problem solve answer --> Find friend
//function start with parameter as array of person names list 
function perfectFriend(array) {

    //if enter number or other key then throw this error line
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] != 'string') {
            return "please enter all  string element of array!";
        }
    }
    //find friend name which name length = 5
    let myFriend;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element.length == 5) {
            myFriend = element;
            return myFriend;
        }
    }
    //if don't have any name of 5 length
    return "You Have no Friend!";
}
//function end
//let arr = ['rohima', 'korimul', 'khadiza', 'suma', 'Rokibul', 'tania', 'Samiul', 'Lotifa'];
let arr = ["khadiza" ,"Bokula","Tnania",-6]
console.log(perfectFriend(arr));
