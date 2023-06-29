function reverseNum(num) {
    let numArr = num.toString().split("");
    let reverseNumArr = numArr.reverse();
    let reverseNum = Number(reverseNumArr.join(""));
    return reverseNum;
}

console.log(reverseNum(32243));
