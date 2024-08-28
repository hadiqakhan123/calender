// var text = "World War II";
//  for (var i = 0; i < text.length; i++) {
//      if (text.slice(i, i + 12) === "World War II") {
//      text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//      }
//      }

//      console.log(text);


// var firstName = "Farzana Khan"
// var firstChar = firstName.charAt(0)
// var lastChar = firstName.charAt(firstName.length - 1);
// for (var i = 0; i < firstName.length; i++) {
// if (firstName.charAt(i) === "!") {
//  alert("Exclamation point found!");
//  break;
// }
// }
// var text = "Hadiqa Khan"
// console.log(text.replace("Khan" , "cute"));
    // var bigDecimal = Math.random();
    // var improvedNum = bigDecimal *10  + 1;
    // var numberOfStars = Math.floor(improvedNum);
    // alert(numberOfStars);
     
    // var Name = prompt(Please enter your name);
    // var lastName = prompt();
    // var Age = prompt();
    // alert(firstName+lastName);
   

    // var date  = new Date();
    // alert("date");
    

dycalendar.draw({
   target:'#dycalendar', 
   dayformat: 'full', 
   type: 'month', 
   monthformat: 'full', 
   highlighttoday: true, 
   prevnextbutton: 'show'
});  

