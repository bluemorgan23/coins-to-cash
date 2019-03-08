/*
    Define an object with keys representing each coin type and plug in the values of each. Store this object in const piggyBank
*/
const piggyBank = {
    quarters: 10,
    nickels: 56,
    dimes: 4,
    pennies: 76
};
/*
    Define a variable that represents the dollar amount
*/
let dollarAmount = 0;
/*
    coinStar expression converts the piggyBank combined key values into the dollar amount
*/
const amountArray = [.25, .05, .10, .01];


const coinStar = (bank) => {
    let i = 0;
    for(let coin in bank) {
        dollarAmount += ((bank[coin]) * amountArray[i]);
        i++;
    }
    return dollarAmount.toFixed(2);
}

console.log(coinStar(piggyBank));


