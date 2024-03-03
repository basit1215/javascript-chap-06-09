var result = "<b>Result:</b>";
var a = 10;
document.write(result +"<br>" +"<br>");
document.write("The value of a is: "+a+"<br>");
document.write(".............................."+"<br>");

document.write("<br>")
document.write("The value of ++a is: ",++a+"<br>");
document.write("Now the value of a is: ",a+"<br>");

document.write("<br>")
document.write("The value of a++ is: "+a++,"<br>");
document.write("Now the value of a is: "+a+"<br>");

document.write("<br>")

document.write("The value of --a is: ",--a+"<br>");
document.write("Now the value of a is: ",a+"<br>");

document.write("<br>")

document.write("The value of a-- is: "+a--,"<br>");
document.write("Now the value of a is: "+a+"<br>");

document.write("<br>")
var a = 2, b = 1;
document.write("a is "+a +"<br>"+ "b is "+b+"<br>");
var result1 = --a ;
var result2 = --a - --b;
var result3 = --a - --b + ++b;
var result4 = --a - --b + ++b + b--;
document.write("--a result is "+result1 +"<br>"+"--a - --b result is "+result2+"<br>"+"--a - --b + ++b result is" +  result3+ "<br>"+"--a - --b + ++b +b-- result is " +result4+"<br>");

document.write("<br>")

var user = prompt("Write a short message...");
document.write(user);

document.write("<br>")
var userMy = +prompt("Write your contact number","5");
document.write(userMy*5);

var firstSubject = prompt("Write First Subject Name");
var secondSubject = prompt("Write Second Subject Name");
var thirdSubject= prompt("Write Third Subject Name");


// var totalMarks = 100;
// var Obtained_Marks = +prompt("Enter-Obtained-Marks")
// document.write("<h3>"+"Subject"+"Total Marks"+"Obtained Marks"+"Percentage");
// document.write(firstSubject,totalMarks+Obtained_Marks,totalMarks/Obtained_Marks*100+"5");