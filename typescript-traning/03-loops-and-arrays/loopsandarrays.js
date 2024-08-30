for (var i = 0; i < 5; i++) {
    console.log(i);
}
var reviews = [5, 5, 4.5, 1, 3];
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Review average = " + average);
var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSports = sportsOne_1[_i];
    console.log(tempSports);
}
for (var _a = 0, sportsOne_2 = sportsOne; _a < sportsOne_2.length; _a++) {
    var tempSports = sportsOne_2[_a];
    if (tempSports == "Cricket") {
        console.log(tempSports + "<< My Favorite!");
    }
    else {
        console.log(tempSports);
    }
}
var sportsTwo = ["Golf", "Cricket", "Tennis"];
sportsTwo.push("Basketball");
sportsTwo.push("Futboll");
for (var _b = 0, sportsTwo_1 = sportsTwo; _b < sportsTwo_1.length; _b++) {
    var tempSports = sportsTwo_1[_b];
    console.log(tempSports);
}
