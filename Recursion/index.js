function countDown(number) {
    if (number === 0) {
        console.log("Here we stop again!!");
        return;
    }

    console.log(number);
    countDown(number - 1);
}
countDown(9);