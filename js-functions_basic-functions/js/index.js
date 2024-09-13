console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

function Title() {
  const title = "Title: The Lord of the JavaScript";
  console.log(title);
}
Title();

function Author() {
  const author = "Author: Mario";
  console.log(author);
}
Author();

function Rating() {
  const rating = "Raing: 4.2";
  console.log(rating);
}
Rating();

function NumberOfSales() {
  const numberofsales = "Number of Sales: 500";
  console.log(numberofsales);
}
NumberOfSales();
// --v-- write your code here --v--
/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/
function logBookData() {
  const title = "Title: The Lord of the JavaScript";
  const author = "Author: Mario";
  const rating = "Rating: 4.2";
  const numberofsales = "Number of Sales: 500";

  console.log(title);
  console.log(author);
  console.log(rating);
  console.log(numberofsales);
}
logBookData();
// --v-- write your code here --v--
