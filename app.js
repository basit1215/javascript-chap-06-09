var result = "<b>Result:</b>";
var a = 10;
document.write(result + "<br>" + "<br>");
document.write("The value of a is: " + a + "<br>");
document.write(".............................." + "<br>");

document.write("<br>")
document.write("The value of ++a is: ", ++a + "<br>");
document.write("Now the value of a is: ", a + "<br>");

document.write("<br>")
document.write("The value of a++ is: " + a++, "<br>");
document.write("Now the value of a is: " + a + "<br>");

document.write("<br>")

document.write("The value of --a is: ", --a + "<br>");
document.write("Now the value of a is: ", a + "<br>");

document.write("<br>")

document.write("The value of a-- is: " + a--, "<br>");
document.write("Now the value of a is: " + a + "<br>");

document.write("<br>")
var a = 2, b = 1;
document.write("a is " + a + "<br>" + "b is " + b + "<br>");
var result1 = --a;
var result2 = --a - --b;
var result3 = --a - --b + ++b;
var result4 = --a - --b + ++b + b--;
document.write("--a result is " + result1 + "<br>" + "--a - --b result is " + result2 + "<br>" + "--a - --b + ++b result is" + result3 + "<br>" + "--a - --b + ++b +b-- result is " + result4 + "<br>" + "<br>");

document.write("<br>")

var user = prompt("Write a short message...");
document.write(user);

document.write("<br>")
var userMy = +prompt("Write your contact number", "5");
document.write(userMy + "<br>" + "<br>" + "<br>");

var number = +prompt("You write any number here, then I will write you the table of that number");
if(
    number >=1
    ){
        document.write("<h3> Table of " + number + " </h3>" + " </b>" + " </b>" + " </b>");
        var multiply=1;
var table;
table=number*multiply;
document.write(number + " x " + multiply + " = " + table + "<br>");
table=number* ++multiply;
document.write(number + " x " + multiply + " = " + table + "<br>");
table=number* ++multiply;
document.write(number + " x " + multiply + " = " + table + "<br>");
table=number* ++multiply;
document.write(number + " x " + multiply + " = " + table + "<br>");
table=number* ++multiply;
document.write(number + " x " + multiply + " = " + table + "<br>");
table=number* ++multiply;
document.write(number + " x " + multiply + " = " + table + "<br>");
table=number* ++multiply;
document.write(number + " x " + multiply + " = " + table + "<br>");
table=number* ++multiply;
document.write(number + " x " + multiply + " = " + table + "<br>");
table=number* ++multiply;
document.write(number + " x " + multiply + " = " + table + "<br>");
table=number* ++multiply;
document.write(number + " x " + multiply + " = " + table + "<br>" + " </b>" + " </b>");
    }
    else {
        document.write("Table of 5" + "<br>");

        var table=5;
        var multiply=1;
        var ans=table*multiply;
        document.write(table +" x "+ multiply +" = " + ans + "<br>");
        
        multiply++;
        ans=table*multiply;
        document.write(table +" x "+ multiply +" = " + ans + "<br>");
        
        multiply++;
        ans=table*multiply;
        document.write(table +" x "+ multiply +" = " + ans + "<br>");
        
        multiply++;
        ans=table*multiply;
        document.write(table +" x "+ multiply +" = " + ans + "<br>");
        
        multiply++;
        ans=table*multiply;
        document.write(table +" x "+ multiply +" = " + ans + "<br>");
        
        multiply++;
        ans=table*multiply;
        document.write(table +" x "+ multiply +" = " + ans + "<br>");
        
        multiply++;
        ans=table*multiply;
        document.write(table +" x "+ multiply +" = " + ans + "<br>");
        
        multiply++;
        ans=table*multiply;
        document.write(table +" x "+ multiply +" = " + ans + "<br>");
        
        multiply++;
        ans=table*multiply;
        document.write(table +" x "+ multiply +" = " + ans + "<br>");
        
        multiply++;
        ans=table*multiply;
        document.write(table +" x "+ multiply +" = " + ans + "<br>" + " </b>" + " </b>");
    }
 

    var  sub_1= prompt("Enter First Subject");
    var  sub_2= prompt("Enter Second Subject");
    var  sub_3= prompt("Enter Third Subject");
    var t_m_each_sub=100;
    var grand_t_m=t_m_each_sub+t_m_each_sub+t_m_each_sub;
    var o_marks_sub_1= +prompt("Enter Obtained marks First Subject");
    var result_sub_1= (o_marks_sub_1 / t_m_each_sub) * 100;
    var o_marks_sub_2= +prompt("Enter Obtained marks Second Subject");
    var result_sub_2= (o_marks_sub_2 / t_m_each_sub) * 100;
    var o_marks_sub_3= +prompt("Enter Obtained marks Third Subject");
    var result_sub_3= (o_marks_sub_3 / t_m_each_sub) * 100;
    var grand_o_m= o_marks_sub_1+o_marks_sub_2+o_marks_sub_3;
    var total_result=result_sub_1+result_sub_2+result_sub_3;
    var grand_result=(total_result/grand_t_m) * 100;

    document.write("<table>");

    document.write("<tr>");
    document.write("<th> Subject</th>");
    document.write("<th> Total Marks</th>");
    document.write("<th> Obtained Marks</th>");
    document.write("<th> Percentage</th>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + sub_1 + "</td>");
    document.write("<td>" + t_m_each_sub + "</td>");
    document.write("<td>" + o_marks_sub_1 + "</td>");
    document.write("<td>" + result_sub_1 + "</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + sub_2 + "</td>");
    document.write("<td>" + t_m_each_sub + "</td>");
    document.write("<td>" + o_marks_sub_2 + "</td>");
    document.write("<td>" + result_sub_2 + "</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + sub_3 + "</td>");
    document.write("<td>" + t_m_each_sub + "</td>");
    document.write("<td>" + o_marks_sub_3 + "</td>");
    document.write("<td>" + result_sub_3 + "</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td> </td>");
    document.write("<th>" + grand_t_m + "</th>");
    document.write("<th>" + grand_o_m + "</th>");
    document.write("<th>" + grand_result + "</th>");
    document.write("</tr>");

    document.write("</table>");