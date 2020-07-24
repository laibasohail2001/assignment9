//chapter 1
//**task 1**
// alert("hello visitors")
// **task 2**
// alert("Error! Please enter the valid password")
// **task3**
// alert("Welcome to JS Land \n Happy Coding!")
// **task 4**
// alert("Welcome to JS Land")
// alert("Happy Coding!\n Prevent this page from creating additional dialogues")
//  **task 5**
// alert("Hello.... I can run JS through my web browser's console")

//chapter 2
//**task 1**
// var a="username";
// document.write(a);
// **task 2**
// var myname="LAIBA SOHAIL";
// document.write(myname);
// **task 3**
// var message="HELLO WORLD";
// alert(message);
// **task 4**
// var student1="JOHNE DOE"
// var student2="15 years old"
// var student3="Certified Mobile Application Development"
// alert(student1);
// alert( student2);
// alert( student3);
// **task 5**
// alert("PIZZA \n PIZZ \n PIZ \n PI \n P")
// **task 6**
// var email="laibasohail4466@gmail.com"
// alert("My email address is "+email);
// **task 7**
// var book="A smarter way to learn Java Scrpit"
// alert("Iam trying to learn from the book " + book);
// **task 8**
// document.write("Yah! I can write HTML content through JAVASCRIPT")
// **task 9**
// alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");


// CHAPTER 3
// **task 1**
// var age="15"
// alert("I am " + age +" years old");
// ** task 2**
// var i=prompt("enter the no of times you visited the website")
// alert("you have visited my webpage "+ i + " times")
// **task 3**
// var birthyear="2001"
// document.write("My birth year is " + birthyear +" \n Data Type of my declared variable is Number" );
// **task 4**
// var name=prompt("enter your name")
// var title=prompt("enter  your product title")
// var quantity=prompt("enter the quantity you want to order")
// document.write(name + " odered " + quantity + title + " from XYZ Clothing Store")



// CHAPTER 4
// **task 1**
// var x,y,z;
// **task 2**
//  5 legal variables;
//  var name;
//  var title;
//  var dog;
//  var fruit;
//  var food;
// 5 illegal variables;
// var 1girl;
// var -boy;
// var 23;
// var 2lady;
// var +apple;
// **task 3 **
// document.write("<h1> Rules for naming JS Variables </h1> \n\n" )
// document.write("variables names can only contains,numbers,$ and _. for example: $my_first variable \n\n" )
// document.write(" Variable must begin with a letter,$ or _. for example:$name,_name or name.\n\n" )
// document.write("Variable names are case sensitive")
// document.write("Variable names should not JS keywords")



// CHAPTER 5
// **task 1,task 2**
// var a=+prompt("Enter a number")
// var b=+prompt("Enter a number")
// var c=prompt("enter the operator")
// var d;
// if(c==='+')
// {
//     d=a+b;
//     document.write("The sum of " + a + " and " + b + " is " + d)
// }
// else if(c==='-')
// {
//     d=a-b;
//     document.write("The difference of " + a + " and " + b + " is " + d)
// }
// else if(c==='*')
// {
//     d=a*b;
//     document.write("The multiplication of " + a + " and " + b + " is " + d)
// }
// else if(c==='/')
// {
//     d=a/b;
//     document.write("The division of " + a + " and " + b + " is " + d)
// }
// **task 3*
// var a;
// document.write("<h3>The value of the variable is undefined</h3>\n\n");
// var a=5;
// document.write("<br>The initial value of the variable is: " + a );
// ++a;
// document.write("<br><br>The value of the variable is now: " + a);
// a=a+7;
// document.write("<br><br>Value after addition is : " + a);
// --a;
// document.write("<br><br>Value after decreament is : " + a);
// a=a%3;
// document.write("<br><br>The remainder  is : " + a);
// **task 4**
// var price=600;
// price =price*5;
// document.write("The cost of 5 movie tickets is " + price + "PKR");
// **task 5**
// var a=prompt("enter a number");
// var i;
// var b;
// document.write("TABLE OF " + a + "<br>");
// for(i=1;i<=10;i++)
// {
//     b=a*i;
//     document.write(+ a + " * " + i + " = " + b + "<br>");
// }
// **task 6**

// var celcius=prompt("enter the temp in fareheit")
// var fareheit=prompt("enter the temp in celcius")
// celcius=(fareheit-32)*5/9;
// document.write(fareheit + "°F is " +  celcius + "°C <br>")

// fareheit=(celcius * 9/5) + 32;
// document.write(celcius + "°C is " + fareheit + "°F");
// **task 7**
// var price1=+prompt("enter the price of first item")
// var price2=+prompt("enter the price of second item")
// var quantity1=+prompt("enter the quantity of first item")
// var quantity2=+prompt("enter the quantity of second item")
// var shipping=+prompt("enter the shipping charges")
// var total;
// document.write("<h1> SHOPPING CART </h1><br>")
// document.write("price of first item is: " + price1 + "<br>")
// document.write("price of second item is: " + price2 + "<br>")
// document.write("quantity of first item is: " + quantity1 + "<br>")
// document.write("quantity of second item is: " + quantity2 + "<br>")
// document.write("price of shipping charges is: " + shipping + "<br>")
// total=(price1*quantity1)+(price2*quantity2)+shipping;
// document.write("total cost is: " + total + "<br>")
// **task 8**
// var totalmarks=+prompt("enter the total marks ")
// var obtained=+prompt("enter the marks obtained by the student")
// var percentage;
// document.write("<h1> MARK SHEET</h1><br><br><br>");
// document.write("total marks:" + totalmarks + "<br>");
// document.write("marks obtained:" + obtained + "<br>");
// percentage=(obtained/totalmarks)*100;
// document.write("percentage is:" + percentage);
// ** task 9**
// var dollars=10;
// var riyals=25;
// var total;
// dollars=dollars*104.80;
// riyals=riyals*28;
// total=dollars+riyals;
// document.write("<h1>THE CURRENCY IN PKR</h1><br><br>");
// document.write("the total amount of curreny in PKR is " + total + "PKR");
// **task 10 **
// var a=5;
// var b;
// b=(a+5)*10/2;
// document.write(b);
// **task 11**
// var a=prompt("enter the current year")
// var b=prompt("enter the birth year")
// var c;
// document.write("<h1>AGE CALCULATOR</h1><br><br>");
// c=a-b;
// document.write("current year:" + a + "<br>");
// document.write("birth year is:" + b + "<br>");

// document.write("Your age is:" + c);
// **task 12**
// var radius=prompt("enter the radius of circle")
// var cir;
// var area;
// cir=2*3.14*radius;
// area=3.14*radius*radius;
// document.write("<h1>THE GEOMETRIZER</h1><br>");
// document.write("the circumference is:" + cir +"<br>");
// document.write("the area of circle is :" + area +"<br>");
// **task 13**
// var a=prompt("enter your favourite snack")
// var b=prompt("current age")
// var c=prompt("estimated gae")
// var d=prompt("amount of snacks per day")
// var e;
// e=(c-b)*d;
// document.write("<h1>THE LIFETIME SUPPLY CALCULATOR</h1><br>");
// document.write("favourite snack:" + a +"<br>");
// document.write("current age:" + b +"<br>");
// document.write("estimated age:" + c +"<br>");
// document.write("amount of snacks per day:" + d + "<br>");
// document.write("you will need " + e + a + "to last you unitl ripe old age of " + c);



// CHAPTER # 6-9
// **task 1**
// var a=prompt("enter the value of a number")
// document.write("<h1>RESULTS</h1><br>")
// document.write("The value of a is:" + a +"<br>");
// document.write("..........................................<br>");
// ++a;
// document.write("The value of ++a is: " + a + "<br>");
// document.write("Now the value of a is:" + a + "<br>");
// document.write("The value of a++ is: " + a + "<br>");
// a++;

// document.write("Now the value of a is:" + a + "<br>");
// --a;
// document.write("The value of --a is: " + a + "<br>");
// document.write("Now the value of a is:" + a + "<br>");
// document.write("The value of a-- is: " + a + "<br>");
// a--;
// document.write("Now the value of a is:" + a + "<br>");
// **task 2**
// var a=2;
// var b=1;
// var c;
// var d;
// var result;
// --a;
// document.write("--a;" + a + "<br>");
// c=a- --b;
// document.write("--a - --b;" + c +"<br>");
// d=c+ ++b;
// document.write("--a - --b + ++b; " + d+ "<br>");
// result=d+b--;
// document.write("--a - --b + ++b + b--; " + result + "<br>");
// **task 3**
// var name=prompt("enter your name")
// alert("hello " + name)
// **task 5**
// var a=prompt("enter a number");
// var i;
// var b;
// document.write("TABLE OF " + a + "<br>");
// for(i=1;i<=10;i++)
// {
//     b=a*i;
//     document.write(+ a + " * " + i + " = " + b + "<br>");
// }
// **task 6**
// var sub1=+prompt("enter your first subject")
// var sub2=+prompt("enter second subject")
// var sub3=+prompt("enter third subject")
// var total=100;
// var total1=300;
// var marks1=+prompt("enter the marks of first subject")
// var marks2=+prompt("enter the marks of second subject")
// var marks3=+prompt("enter the marks of third subject")
// var sub1per=(marks1/total)*100;
// var sub2per=(marks2/total)*100;
// var sub3per=(marks3/total)*100;
// var obtained=marks1+marks2+marks3;
// var totalper=(obtained/total1)*100;
// document.write("<table><tr><td>Subjects &nbsp;</td><td>Total Marks &nbsp</td> <td>Obtained Marks &nbsp</td><td>Percentage &nbsp</td></tr><tr><td>"+sub1+"&nbsp</td><td>"+total+"&nbsp</td><td>"+marks1+"&nbsp</td><td>"+sub1per+"% &nbsp</td></tr><tr><td>"+sub2+"&nbsp</td><td>"+total+"&nbsp</td><td>"+marks2+"&nbsp</td><td>"+sub2per+"% &nbsp</td></tr><tr><td>"+sub3+"&nbsp</td><td>"+total+"&nbsp</td><td>"+marks3+"&nbsp</td><td>"+sub3per+"% &nbsp</td></tr><tr><td>"+"  " +"&nbsp</td><td>"+total1+"&nbsp</td><td>"+obtained+"&nbsp</td><td>"+totalper+"% &nbsp</td>")


// CHAPTER 9-11;
// **task 1**
// var city=prompt("enter city name")
// if(city=='karachi')
// {
//     alert("WELCOME TO CITY OF LIGHTS")
// }
// ** task 2**
// var gender=prompt("enter your gender")
// if(gender=='male'||gender=='MALE')
// {
//     alert("GOOD MORNING SIR!")

// }
// else if(gender=='female' || gender=='FEMALE')
// {
//     alert("GOOD MORNING MAA'M!")
// }
// ** task 3**
// var color=prompt("enter the color of traffic signal")
// if(color=='red' || color=='Red')
// {
//     alert("MUST STOP")
// }
// else if(color=='yellow' || color=='Yellow')
// {
//     alert("READY TO MOVE")
// }
// else if(color=='green' || color=='Green')
// {
//     alert("MOVE NOW")
// }
// ** task 4**
// var fuel=prompt("enter the remaining fuel")
// if(fuel<0.25)
// {
//     alert("PLEASE REFILL THE FUEL IN YOUR CAR")
// }
// **task 5(a)***/
// var a=4;
// if(++a===5)
// {
//     alert("given condition for variable a is true")
// }
// (b)//
// var b=82;
// if(b++===83)
// {
//     alert("given condition for variable b is true")
// }
// (c)
// var c=12;
// if(c++===13)
// {
//     alert("condition 1 is true")
// }
// if(c===13)
// {
//     alert("condition 2 is true")
// }
// if(++c<14)
// {
//     alert("condition 3 is true")
// }
// if(c===14)
// {
//     alert("condition4 is true")
// }
// (d)
// var materialcost=20000;
// var laborcost=2000;
// var totalcost=materialcost+laborcost;
// if(totalcost===laborcost+materialcost)
// {
//     alert(:the cost is equal)
// }
// (e)
// if(true)
// {
//     alert("true")
// }
// if(false)
// {
//     alert("false")
// }
// (f)
// if("car"<"cat")
// {
//     alert("car is smaller than cat")
// }
// **task 6**
// var totalmarks=prompt("enter the total marks")
// var obtained=prompt("enter the marks obtained")
// var per;
// var garde;
// var remarks;
// per=(obtained/totalmarks)*100;
// if(per>=80)
// {
//     garde='A-one'
//     remarks='Excellent'
// }
// else if(per>=70 && per<=80)
// {
//     garde='A'
//     remarks='Good'

// }
// else if(per>=60 && per<=70)
// {
//     garde='B'
//     remarks='YOU NEED TO IMPROVE'

// }
// else if(per<60)
// {
//     garde='Fail'
//     remarks='Sorry'
// }
// document.write(<"h1>MARKSHEET</h1><br>");
// document.write("total marks:" + totalmarks +"<br>");
// document.write("marks obtained:" + obtaine;d + "<br>");
// document.write("percentage:" + per +"< br>")
// document.write("grade:" + garde +"<br>");
// document.write("remarks:" + remarks + "<br>");
// **task 7** */
// var secret=7;
// var guess1;
// var guess=+prompt("guess the secret number")
// if(guess===secret)
// {
//     alert("BINGO!! CORRECT ANSWER");
// }
// guess1=guess+1;
// else if(guess1===secret)
// {
//     alert("close to the correct answer");
// }
// **task 8** */
// var number=+prompt("enter a number")
// if(number%3==0)
// {
//     alert("number is divisible by 3");
// }
// **task 9** */
// var number=+prompt("enter the number")
// if(number%2==0)
// {
//     alert("EVEN")
// }
// else
// {
//     alert("ODD")
// }
// **task 10 ** */
// var temp=+prompt("enter the temperature")
// if(temp>40)
// {
//     alert("too hot outside")
// }
// else if(temp>30)
// {
//     alert("wheather is normal")
// }
// else if(temp>20)
// {
//     alert("wheather is cool")
// }
// else if(temp>10)
// {
//     alert("OMG!! TODAY THE WHATHER IS VERY COOL")
// }
// **task 11** */
// var a=+prompt("Enter a number")
// var b=+prompt("Enter a number")
// var c=prompt("enter the operator")
// var d;
// if(c==='+')
// {
//     d=a+b;
//     document.write("The sum of " + a + " and " + b + " is " + d)
// }
// else if(c==='-')
// {
//     d=a-b;
//     document.write("The difference of " + a + " and " + b + " is " + d)
// }
// else if(c==='*')
// {
//     d=a*b;
//     document.write("The multiplication of " + a + " and " + b + " is " + d)
// }
// else if(c==='/')
// {
//     d=a/b;
//     document.write("The division of " + a + " and " + b + " is " + d)
// }
//CHAPTER 12-13
//** task 1** */
// var alphabet=prompt("enter a string")
// lower=alphabet.charCodeAt(0)
// if(lower>=65 && lower<=96)
// {
//     alert("string is uppercase")
// }
// else if(lower>=97 && lower<=122)
// {
//     alert("string is lowercase")
// }
// else if(lower>=48 && lower<=57)
// {
//     alert("its a number")
// }
// **task 2***/
// var a=+prompt("enter a number")
// var b=+prompt("enter another number")
// var large=0;
// if(a>b)
// {
//     large=a;
//     alert(a + " is the largest one")
// }
// else if(b>a)
// {
//     large=b;
//     alert(b +" is the largest one")
// }
// else if(a==b)
// {
//    alert("both are equal")
// }
// **task 3***/
// var a=+prompt("enter a number")
// if(a<0)
// {
//     alert("the number is negative")
// }
// else if(a>0)
// {
//     alert("the number is positive")
// }
// else if(a==0)
// {
//     alert("number is zero")
// }
//**task 4** */
// var str=prompt("enter a character")
// if(str=== "a" || str=== "A" || str=== "E" || str=== "e" || str=== "i" || str=== "I" || str=== "O"  || str=== "o" || str=== "U" || str=== "u")
// {
//     alert("TRUE")
// }
// else
// {
//     alert("FALSE")
// }
//** task 5** */
// var password="laiba123";
// var password1=prompt("enter a password")
// if(password1==" ")
// {
//     alert("enter a password")
// }
// else if(password1==password)
// {
//     alert("correct password")
// }
// else if(password1!==password)
// {
//     alert("incorrect passwoord")
// }
//**task 6** */
// 
//** task 7** */
// var time=prompt("enter the time")
// if(time==1900)
// {
//     if(time>=0000 && time<=1200)
//     {
//         alert("GOOD MORNING")
//     }
//     else if(time>=1200 && time<1700)
//     {
//         alert("GOOD AFTERNOON")
//     }
//     else if(time>=1700 && time<2100)
//     {
//         alert("GOOD EVENING")
//     }
//     else if(time>=2100 && time<=2359)
//     {
//         alert("GOOD NIGHT")
//     }
// }



//CHAPTER 14-16;
//** task 1** */
//var arr=[];
//** task 2** */
//var arr=new Array();//
//** task 3** */
//var strarray=["laiba","areeba","hamza","muneeba"];//
//** task 4** */
// var numarray=[1,2,3,4];
// ** task 5** */
// var booleanarray=["&&",||,!];
// ** task 6***/
// var mixedarray=["laiba",1,"apple"];
//**task 7 ***/
// var educatearr=[ "SSC", "HSC", "BCS",
//     "BS", "BCOM", "MS", "M. Phil.", "PhD" ];
//  document.write("<h1> QUALIFICATIONS</h1><br>")
//  for(var i=0;i <educatearr.length;i++)
//  {
//      document.write(i+ " ) "+ educatearr[i]+"<br>");
//  }
//**task 8** */
// var students=["MICHEAL","JOHN","TONY"];
// var marks=["320","230","480"];
// var per=[];
// for(var i=0;i<marks.length;i++)
// {
//      per[i]=marks[i]/500*100;
// }
// for(var j=0;j<students.length;j++)
// {
//     document.write("Score of " + students[j] + "is" + marks[j] + ".Percentage is:" + per[j] + "%<br>")
// }
//**task 9** */
//var color=["red","yellow","green","purple"];
// var b=prompt("enter the value")
// var d=prompt("enter a value")
// var c=prompt("enter a value")
// for(var i=0;i<color.length;i++)
// {
//     document.write(color[i] +  "  ");
// }
//  color.unshift(b);
// for(var i=0;i<color.length;i++)
// {
//     document.write(color[i] + " <br> ");
// }
// color.push(c);
// for(var i=0;i<color.length;i++)
// {
//     document.write(color[i] + " <br> ");
// }
// color.unshift(b,d);
// for(var i=0;i<color.length;i++)
// {
//     document.write(color[i] + " <br> ");
// }
// color.shift(0);
// for(var i=0;i<color.length;i++)
// {
//     document.write(color[i] + "<br>")
// }
// color.pop();
// for(var i=0;i<color.length;i++)
//  {
//      document.write(color[i] + "<br>")
//  }
// var e=prompt("enter the position you want to enter the elemnet")
// var f=prompt("enter the element")
// color.splice(e,0,f)
// for(var i=0;i<color.length;i++)
//  {
//      document.write(color[i] + "<br>")
//  }
// var g=prompt("enter the position form where you want to delete")
// var h=prompt("enter the number how may elements you want to delete")
// color.splice(g,h);
// for(var i=0;i<color.length;i++)
//  {
//      document.write(color[i] + "<br>")
//  }
//**task 10** */
// var scores=[320,230,480,120];
// document.write("<h1>UNORDERED SCORES OF STUDENTS</h1><br>")
// for(var i=0;i<scores.length;i++)
// {
//     document.write(scores[i] + ",")
// }
// document.write("<h1> ORDERED SCORE OF STUDENTS</h1><br>")
// scores.sort();
// for(var i=0;i<scores.length;i++)
// {
//     document.write(scores[i] + ",")
// }
//**task 11** */
// var cities=['karachi','lahore','islamabad','peshawar','quetta'];
// document.write("<h1> CITIES LIST</h1><br>")
// for(var i=0;i<cities.length;i++)
// {
//     document.write(cities[i]+",")
// }
// var selected=[];
// selected=cities.slice(1,4);
// document.write("<br><h1>SELECTED CITIES</h1><br>")
// for(var i=0;i<selected.length;i++)
// {
//     document.write(selected[i]+",")
// }
//** task 12** */
// var arr=["This","is","my","cat"];
// var arr1=[];
// document.write("<h1>ARRAY:<br>")
// for(var i=0;i<arr.length;i++)
// {
//     document.write(arr[i] + ",")
// }
// document.write("<br>")
// arr.join()
// document.write("STRING:<br>")
// for(var i=0;i<arr.length;i++)
// {
//     document.write(arr[i] + "   ")
// }

//**task 13** */
// var devices=["keyboard","mouse","printer","monitor"];
// document.write("<h1>DEVICES:<br>")
// for(var i=0;i<devices.length;i++)
// {
//     document.write(devices[i] + "," +  "  ")
//  }
//   document.write("<br>OUT:<br>");
//   document.write(devices.shift());
//   document.write("<br>OUT:<br>");
//   document.write(devices.shift());
//   document.write("<br>OUT:<br>");
//   document.write(devices.shift());
//   document.write("<br>OUT:<br>");
//   document.write(devices.shift());

//**task 14** */
// var devices=["keyboard","mouse","printer","monitor"];
// document.write("<h1>DEVICES:<br>")
// for(var i=0;i<devices.length;i++)
// {
//     document.write(devices[i] + "," +  "  ")
//  }
//   document.write("<br>OUT:<br>");
//   document.write(devices.pop());
//   document.write("<br>OUT:<br>");
//   document.write(devices.pop());
//   document.write("<br>OUT:<br>");
//   document.write(devices.pop());
//   document.write("<br>OUT:<br>");
//   document.write(devices.pop());
//**task 15** */
// var phones=["apple","samsung","sony","haier","nokia","motorolla"];
// document.write("<h1><select>")
// {
//     for(var i=0;i<phones.length;i++)
//     document.write("<option>" + phones[i] + "</option>")
// }
// document.write("</select></h1>")




//CHAPTER 17-20//
//**task 1** */
//let activities = [];
//**task 2** */
// var number=[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
// ];
// for( var i=0;i<number.length;i++)
// {
//     document.write(number[i] + "<br>")
// }
// 
//** task 3** */
//for(var i=1;i<=10;i++)
// {
//     document.write(i+ "<br>")
// }
// ** task 4***/
// var number=prompt("enter the number")
// var length=prompt("enter the length of the table")
// var c;
// document.write("MULTIPLICATION TABLE OF " + number + "<br>")
// document.write("LENGTH=" + length + "<br>")
// for(var i=1;i<=length;i++)
// {
//     c=number*i;
//     document.write(number + "*" + i + "=" + c + "<br>")
// }
// ** task 5***/
// var fruits=["apple","banana","mango","orange","strawberry"]
// for(var i=0;i<fruits.length;i++)
// {
//     document.write(fruits[i] + "<br>")
// }
// for( var i=0;i<fruits.length;i++)
// {
// document.write("element at index " + i + " is " + fruits[i] + "<br>")

// }
//**task 6** */
// var arr1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// var c;
// var k;
// document.write("<h1>COUNTING:</h1><br>")
// for(var i=0;i<arr1.length;i++)
// {
//     document.write(arr1[i] + "  ")
// }
// document.write("<h1>REVERSED ORDER:</h1><br>")
// arr1.reverse();
// for(var i=0;i<arr1.length;i++)
// {
//     document.write(arr1[i] + "  ")
// }
// arr1.reverse();
// document.write("<h1>EVEN:</h1><br>")
// for(var i=0;i<arr1.length;i++)
// {
//     if(arr1[i]%2==0)
//     {
//         document.write(arr1[i] + "  ")
//     }
// }
// document.write("<h1>ODD:</h1><br>")
// for(var i=0;i<arr1.length;i++)
// {
//     if(arr1[i]%2!==0)
//     {
//         document.write(arr1[i] + "  ")
//     }
// }
// document.write("<h1>SERIES:</h1><br>")
// for(var i=0;i<arr1.length;i++)
// {
//     if(arr1[i]%2==0)
//     {
        
//         document.write(arr1[i] + k + "  ")
//     }
// }
//**task 7** */
// var bakery=["cake","applepie","cookies","chips","patties"];
// var item=prompt("Welcome to ABC bakery.what do you want sir/maa'm")
// //check//
// if(bakery.indexOf(item)!== -1)
// {
//     document.write(item + " is available at our bakery")

// }
// else
// {
//     document.write(item + " is not available in our bakery")
// }
// **task 8***/
// var number=[24,53,78,91,42,12];
// var largest=0;
// for(var i=0;i<number.length;i++)
// {
//     if(number[i]>largest)
//     largest=number[i];
// }
// document.write("the largest number is " + largest)
//** task 9** */
// var number=[24,53,78,91,42,12];
// var smallest=number[0];
// for(var i=0;i<number.length;i++)
// {
//     if(number[i]<smallest)
//     smallest=number[i];
// }
// document.write("the smallest number is " + smallest)

//**task 10** */
// var i;
// for(var i=1;i<=100;i++)
// {
//     if(i%5==0)
//     {
//         document.write(i + ",")
//     }
// }

// CHAPTER 21-25//
// TASK # 1//
// var firstname=prompt("enter your first name")
// var lastname=prompt("enter your last name")
// var fullname;
// fullname=firstname+lastname;
// alert(" HELLO " + fullname);
// TASK # 2//
// var mobile=prompt("enter your favourite mobile model")
// var length=mobile.length;
// document.write("My favourite mobile model is: " + mobile + "  " +  " \n Length of the string is:" + length);
// TASK # 3//
// var name= 'pakistani'
// var firstChar = name.indexOf("n");
// document.write("<h1>STRING: " + name + "<br>")
// document.write("index of n is: " + firstChar)
// TASK # 4//
// var str='Hello World'
// var lastindex=str.lastIndexOf('l');
// document.write("<h1>STRING: " + str + "<br>")
//  document.write("last index of l is: " + lastindex);
// TASK # 5//
// var name= 'pakistani'
// var firstChar = name.charAt(3);
//  document.write("<h1>STRING: " + name + "<br>")
// document.write("letter at index 3 is: " + firstChar)
// TASK 6//
// var firstname=prompt("enter your first name")
//  var lastname=prompt("enter your last name")
 
//  alert(" HELLO " + firstname + lastname);
// TASK # 7//
// var city="Hyderabad"
// var replacement=city.replace("Hyder","Islam");
// document.write("<h1> CITY: " + city + "<br>")
// document.write("After replacement: " + replacement)
// TASK # 8//
// var message = 'Ali and Sami are best friends. They play cricket and football together';
// for(var i=0;i<message.length;i++)
// {
    
//     var message=message.replace('and','&')
// }
// document.write(message);
// TASK # 9//
//  var value='427'
//  var b=parseInt(value);
//  document.write("value: " + value + "<br>");
//  document.write("type: string <br>");
//  document.write("value: " + b + "<br>")
// document.write("type : number")
// TASK # 10//
// var small='peanuts'
// var capital=small.toLocaleUpperCase();
// document.write("user input:" + small + "<br>")
// document.write("upper case: " + capital)
// TASK # 11//
// var userinput='javascrpit'
// var titlecase=userinput.replace('j','J')
// document.write("user input: " + userinput + "<br>")
// document.write("title case: " + titlecase)
// TASK #12//
// var num=35.35;
// var str=num.toString();
// document.write("number: " + num + "<br>")
// document.write("result: " + str + "<br>")
// TASK # 13//
// var username=prompt("enter the username")
// var not=username.charCode;

// for(var i=0; i<username.length;i++)
// {
//     if(username.slice(i,i+1)== '!' || username.slice(i,i+1)=='@' || username.slice(i,i+1)==',' || username.slice(i,i+1)=='.' )
//     {
//         alert("please enter a valid username")
//     }
    
// }
// TASK # 14//
// var arr=['cake','cookie','pateries','chips','patties']
// var search=prompt("welcome to ABC bakery.. enter the item you want")
// search=search.toLowerCase();
// var items=arr.indexOf(search);
// if(arr.indexOf(search!=-1))
// {
//     alert(search + " is available at " + items + " in our bakery")
// }
// else
// {
//     alert("not available")
// }
// TASK # 15//
// var password=prompt("enter a password")



   
   
// }
// TASK # 16//
// var university='University Of Karachi'

// for( var i=0;i<university.length;i++)
// {
//     document.write(university[i] + "<br>")
// }
//TASK # 17//
// var userinput=prompt("enter a value")
// document.write(userinput.slice(-1))
//TASK 18//
// var str='the quick brown fox jumps over the lazy dog';

// if(str1==='the')
// {
// occurence=occurence+1;
// }
// document.write("Text: the quick brown fox jumps over the lazy dog " + " <br> " + " occurence of the is: " + occurence)
//CHAPTER 26-30//
//TASK #1//
// var input=prompt("enter a number")
// var c=Math.round(input)
// var a=Math.floor(input)
// var b=Math.ceil(input)
// document.write("number: " + input + "<br>")
// document.write("round off value: " + c + "<br>")
// document.write("floor value: " + a + "<br>")

// document.write("ceil value: " + b + "<br>")
// TASK #2//
// var input=prompt("enter a number")

// var a=Math.floor(input)
//var c=Math.round(input)
// var b=Math.ceil(input)
// document.write("number: " + input + "<br>")
//document.write("round off value: " + c + "<br>")
// document.write("floor value: " + a + "<br>")

// document.write("ceil value: " + b + "<br>")
//TASK # 3//
// var number=prompt("enter a number")
// var b=Math.abs(number);
// document.write("the absolute value of " + number + " is " + b)
// TASK # 4//
// var min=1; 
//     var max=6;  
//     var random = 
//     Math.floor(Math.random() * (+max - +min)) + +min; 
//     document.write("Random Number Generated : " + random );  
// TASK # 5//
// var a=Math.random();
// if(a<0.5)
// {
//     document.write("random coin value is heads")
// }
// else
// {
//     document.write("random coin value is tails")
// }
// TASK # 6//
// var a=Math.random()*101;
// var b=Math.floor(a);
// document.write("random numbers between 1-100 is: " + b);
//TASK # 7//
// var wieght=prompt("enter yout weight")
// var b=Number.parseFloat(wieght)
// document.write("the weight of the user is: " + b)
// TASK # 8//
// var a=Math.random()*11;
// var c=Math.floor(a);
// var b=prompt("enter a number")
// if(c==b)
// {
//     alert("congratulation your number is correct")
// }
// else
// {
//     alert("try again")
// }
//CHAPTER 31-34//
// TASK # 1//
// var a=new Date();
// document.write(a)
//TASK # 2//
// var a=new Date();
// var b=a.toString();
// var c=b.slice(4,7);
// document.write("the current month is: " + c)
//TASK # 3//
// var a=new Date();
//  var b=a.toString();
//  var c=b.slice(0,3);
//  alert("TODAY IS: " + c)
//TASK # 4//
// var a=new Date();
//  var b=a.toString();
//  var c=b.slice(0,3);
//  if(c=='Sun' || c=='Sat')
//  {
//      alert("its a fun day")
//  }
//  else
//  {
//      alert("no fun day")
//  }
//TASK # 5//
// var a=new Date();
//  var b=a.toString();
//  var c=b.slice(8,10);
//  document.write(c)
// if(c >= '1' || c<='15')
// {
//     alert("first 15 days of the month")
// }
// else
// {
//     alert("last 15 days of the month")
// }
// TASK # 6//
// var minutes= new Date();
// var minmilli=minutes.getTime();
// var minutesconvert=minmilli/(1000*60*60)
// document.write("current date: " + minutes + "<br>")
// document.write("elasped milliseconds since january 1,1970: " + minmilli+ "<br>");
// document.write("elasped time since january 1,1970: " + minutesconvert + "<br>");
// TASK # 7//
// var b= new Date();
// var a=b.getHours();
//  if(a>=1 && a<=12)
//  {
//      alert("its AM")  
//  }
//  else
//  {
//      alert("its PM")
//  }

 // TASK # 8//
//  var date = new Date();
//  document.write("Current Date: " + date );
//  var lastDay = new Date(date.getFullYear(), date.getMonth(), 0);
//  document.write("<br>"+lastDay);
 // TASK #9//
//  var date1 = new Date("06/18/2015"); 
// var date2 = new Date("07/18/2020"); 
  
// // To calculate the time difference of two dates 
// var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// // To calculate the no. of days between two dates 
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  
// //To display the final no. of days (result) 
// document.write(Difference_In_Days + " have been passed since 1st RAMAZAN 2015")
              
  
 // TASK #10//

// var date1 = new Date("01/01/2015"); 
// var date2 = new Date(); 
  
// // To calculate the time difference of two dates 
// var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// // To calculate the no. of days between two dates 
// var Difference_In_Days = Difference_In_Time / ( 3600 * 24); 
  
// //To display the final no. of days (result) 
// document.write(Difference_In_Days + " seconds have been passed since 1st RAMAZAN 2015")
 
//TASK # 11//
// var date= new Date()
//  date.setHours(date.getHours()-1)
// document.write(date);
// TASK # 12//
// var date= new Date()
//  var date2=new Date(date.setFullYear(date.getFullYear()-100))
// document.write("current date" + date + "<br>")
// document.write("100 years back" + date2);
// TASK #13//
// var age=prompt("enter your age")
// var date=new Date();
// date1= date.getFullYear()-age;
// document.write("your birth year is " + date1);
// TASK #14//
// var a=prompt("Enter your Name");
// var b=prompt("Enter Current Month");
// var c=prompt("Enter  Number Of units");
// var d=prompt("Enter Charges Per Unit");
// document.write("Customer Name Is:"+ " "+a+"<br>");
// document.write("Month:"+ " "+b+"<br>");
// document.write("Number of units Is:"+ " "+c+"<br>");
// document.write("Charges Per Unit Is:"+ " "+d+"<br>");
// "<br>"
// var e=c*d;
// document.write("Net Amount Payable (within Due Date):"+ " "+e+"<br>");
// document.write("late Payment Charges:"+ " "+350+"<br>");
//  var f=e+350;
// document.write("Gross Amount Payable (after Due Date):"+ " "+f+"<br>");
 //CHAPTER 35-38
 //TASK #1//
// function current()
// {
//     var date=new Date();
//     document.write(date);
// }
// current();

//TASK # 2//
// function greeting ()
// {
//     var first=prompt("enter your first name:")
//     var last=prompt("enter your last name")
//     alert( "HELLO " + first + last)
// }
// greeting();
// TASK # 3//
// function addition ()
// {
//   var a=+prompt("enter a number")
//   var b=+prompt("enter another number")
//   var sum=a+b;
//   document.write(sum);

// }
// addition();
// TASK # 4//
// var num1 =prompt("enter your first number");
// var num2 =prompt("enter your second number");
// var op=prompt("enter operator from +- /*");
// function add (a,b)
// {

// var result =parseInt(a)+ parseInt(b);
// document.write("Addition result is:" + result);
// }

// function subtract (a,b)
// {
//     var result= a-b;

// document.write("Subtraction result is:" + result);
// }
// function Multiply (a,b)
// {
//     var result=a*b;

// document.write("multilication result is:" + result);
// }
// function divide (a,b)
// {
//     var result=a/b;

// document.write("division result is:" + result);

// }
// if(op =="+")
// {
//     add(num1,num2);
// }


//  else if(op =="-")
// {
//     subtract(num1,num2);
// }
//  else if(op =="*")
// {
// Multiply(num1,num2);
// }
// else if(op =="/")
// {
//     divide(num1,num2);
// }
// else
// {
//     alert("invalid operator");
// }
// TASK #5//
// var a=prompt("enter a number")
// function square(a) {
//     var result=a*a;
//     alert("square of the number is: " + result)
// }
// square(a)
// TASK # 6//
// var a=prompt("enter a number")
// var fact=1;

// function factorial(a) {
//   for( var i=1;i<=a;i++)
//     {
//        fact=fact*i
//     }
//     alert("factorial is  : " + fact)
// }
// factorial(a)
// TASK #7//
// var a=prompt("enter the first number")
// var b=prompt("enter the second number")
// function counting(a,b) {
//     for(var i=a;i<=b;i++)
//     {
//         document.write(i + "<br>")
//     }
// }
// counting(a,b);
// TASK 8//
// var base=prompt("enter the value of base")
// var perpendicular=prompt("enter the value of perpendicular")
// function outer(hypo){
//     function inner(base,perpendicular)
//     {
//         var base1=base*base;
//         var perpendicular1=perpendicular*perpendicular;
//         inner();
//     }

//     result=base1+perpendicular1
// }
// outer(hypo);
// TASK #9//

//=======================i===================//
// function area(x,y){
//     var area=x*y;
//     alert(area);

// }
// area(5,4);
// //========================ii================//
// var w=prompt("enter the value of width")
// var h=prompt("enter the value of height")
// function area(x,y){
//     var area=x*y;
//     alert(area);

// }
// area(w,h);

// TASK # 10//
// var str=prompt("enter a string")
// function palindrome(str) {
//     const reversed=str.split('').reverse().join('')
//     return str===reversed? 'its a palindrome':'its not a palindrome';
// }
// document.write(palindrome(str));
// TASK # 11//

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));
// TASK # 12//
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));
// TASK # 13//
// function occurence(str,num) {
   
//     var num1=0;
//     for(var i=0;i < str.length;i++)
//     {
//         if (str.charAt(i) == num)
//         {
//            num1+=1;
//         }
//     }
//     return num1;
// }
// document.write(occurence('JSResourceS.com', 'o'));


// TASK # 14//
// var radius=prompt("enter the value of radius")
// function calcircumference(radius) {
//     var circumference=2*3.14*radius;
//     document.write("the value of circumference is : " + circumference + "<br>");
// }
// calcircumference(radius);
// function calarea(radius) {
//     var area=3.14*radius*radius;
//     document.write("the value of area is : " + area)
// }
// calarea(radius);
/* -----------------------------------CHAPTER 38 to 42----13457910-----------------------------------------*/
/*-------------------------------------------------TASK 2-------------------------------------------------------*/
// var year = prompt("Enter any year")
// if( (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)){
//     console.log("yes");
// }
// else {
//     console.log("NO")
// }
/*----------------------------------------------------TASK 6---------------------------------------------*/
// var string =prompt("Enter any sentence I remove the vowels");

// string = string.replace( /[aeiou]/g, '' );

// console.log(string); 
/*---------------------------TASK 8-----------------------------------------------*/ 
// var km=prompt("Enter youe distance in kilometer");
//    var   m = km * 1000;
//    var  cm = km * 1000 * 100;
//    var  f = km * 3280.84;
//    var inch = km * 39370.08;

//     document.write("Distance in Meter" + " "+ m +" "+ "<br>");
//     document.write("Distance in  CentiMeter" + " "+ cm  +" "+ "<br>" );
//     document.write("Distance in KiloMeter" + " "+ f   +" "+"<br>");
//     document.write("Distance in Inches" + " "+ inch  +" " + "<br>");
