for (let i = 0; i < 5; i++) {
    console.log(i);
}

let reviews: number[] = [5,5,4.5,1,3];
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}

let total: number = 0;
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total+=reviews[i];
}

let average: number = total/reviews.length;
console.log("Review average = " + average);

let sportsOne: string[] = ["Golf","Cricket","Tennis","Swimming"];
for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}

for (let tempSports of sportsOne) {
    console.log(tempSports);
}


for (let tempSports of sportsOne) {
    if (tempSports == "Cricket") {
        console.log(tempSports + "<< My Favorite!");
    }
    else {
        console.log(tempSports);
    }
}

let sportsTwo: string[] = ["Golf","Cricket", "Tennis"];
sportsTwo.push("Basketball");
sportsTwo.push("Futboll");

for (let tempSports of sportsTwo) {
    console.log(tempSports);
}