var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    total += reviews[i];
    console.log(reviews[i]);
}
var average = total / reviews.length;
console.log("Review average = " + average);
