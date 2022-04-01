/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 2. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) შედარება
 * 3) If პირობები
 * 4) ლოგიკური ოპერატორები
 * 5) Switch 
 */



// <------- შედარება ---------#### //

const num1 = 0;
const boolean1 = false;
const num2 = 5;
const emptyString = "";
const boolean2 = false;
const text = "I'm Text";
const text2 = "0";

// ჩამოწერეთ ცვლადები რომელი არის true რომელი false
// ჩამოწერეთ ზეპირად!
// მაგ. [1, 2, 3, 4]

// >>> კოდი დაწერეთ აქ 

const isFalse = [ boolean1, boolean2];
const isTrue = [num2, num1, emptyString, text, text2];

//


// შეცვალეთ ერთი ასო რომ მიიღოთ ჭეშმარიტი დებულება
// მოკლედ ახსენით მუშაობის პრინციპი თუ რატომ იმოქმედა

console.log("ahc" > "ah") // როორც მივხვდი ანბანის ნუმერაციას ჰქონდა მნიშვნელობა abc ის მნისვნელობა ნაკლები
// იქნებოდა ah ის მნიშვნელობაზე ამიტომ ჭეშმარიტი ტოლობა რომ მიგვეღო b უნდა შეცვლილიყო h ით.
console.log(2 === 002) //ტექსტად იყო წარმოდგენილი ციფრი 002 შესბამისად პროგრამა ვერ გაუტოლებდა მას მეორე ციფრს.



// <------- ლოგიკური ოპერატორები ---------#### //

// შეამოწმეთ სრულ წლოვნებაზე და თუ მეტი ან ტოლია
// 18 წელზე შესთავაზეთ სასმელი

// >>> კოდი დაწერეთ აქ 
let mainAge = 18;
let userAge = Number(prompt('enter your age'))
if ( mainAge == userAge){
  console.log('Lets drink')
}else if (userAge > mainAge){
  console.log('you can also')
}
else {
  console.log('no no no you are children :)')
}

//


// მოიფიქრეთ 2 if else-ის მაგალითი თქვენით

// >>> კოდი დაწერეთ აქ
// first
var text1 = 'nacrisferi';
if (text1 == 'tetri'){
    console.log('tetri');
}else if (text1 == 'shavi'){
    console.log('shavi')
}else if(text1 == 'nacrisferi'){
    console.log('nacrisferi')
}else{
    console.log('false')
}

//second
var num4 = 10;
var num5 = 20;
if (num4 < 20 && num5 > 5){

    console.log('this is true');
}else{
    console.log('this is false')
}



//


// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ
num4 < num5 && num5 > 5? console.log('this is true') : console.log('this is false');
//



/*
  ჩვენ გვაქვს ოთხი ფერი რომელთაც აქვთ
  კონკრეტული ციფრები მინიჭებული (თეთრი=4, 
  წითელი=3, მწვანე=2, ლურჯი=1, შავი=0, 
  სხვა ყველა ფერი=undefinde)
*/




// დაწერეთ if ისე, რომ როდესაც ჩვენ
// შევცვლით მაღლა განსაზღვრულ ცვლადს გავიგოთ
// ამ აიდის ფერი (ფერი გამოიტანეთ კონსოლში ტექსტის
// სახით)


// >>> კოდი დაწერეთ აქ

let colorId = 2

if ( colorId == 3){
  console.log('წითელი');
}
else if (colorId == 4){
console.log('თეთრი')
} 
else if(colorId == 2){
  console.log('მწვანე')
} 
else if(colorId == 1){
  console.log('ლურჯი')
}
else if(colorId == 0){
  console.log('შავი')
}
else{
  console.log('undefined')
}
//



// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ

//  colorId == 0 ? console.log('შავი') : colorId == 1 ? console.log('ლურჯი') : colorId == 2 ? console.log('მწვანე') :  colorId == 3 ? console.log('წითელი') : colorId == 4 ? console.log('თეთრი') : console.log('undefined')
colorId == 0 ? console.log('შავი') : colorId == 1 ? console.log('ლურჯი') : colorId == 2 ? console.log('მწვანე') : colorId == 3 ? console.log('წითელი') : colorId == 4 ? console.log('მწვანე') : console.log(undefined)
//


// <------- დავალება Switch ---------#### //

// ცადეთ იგივე გააკეთოთ რაც წინა დავალებაში
// ოღონდ ამჯერად Switch-ის დახმარებით
switch(colorId){
  case colorId == 2:
  console.log('მწვანე')
  case colorId == 3:
  console.log('წითელი')
  case colorId == 1:
  console.log('ლურჯი')
  case colorId == 0:
  console.log('შავი')
  case colorId == 4:
  console.log('თეთრი')
  default: 
  console.log('თეთრი')

}

// >>> კოდი დაწერეთ აქ


//



//  ||
//  ||
//  ||
// \  /
//  \/

/*
    ეს დავალება რომ ნახოთ გამოიყენეთ HTML,
    ჩვენი მიზანია ავაწყოთ ჩეთ ბოტი რომელთანაც ვისაუბრებთ
    როგორც ხედავთ დაბლა გამზადებული მაქვს კოდის გარკვეული
    ნაწილი ეს არის ფუნქცია რომელსაც მომავალში გავივლით
    კონკრეტულად ეს ფუნქცია არის რეკურსიული, რეკურსია
    არის პროცესი როდესაც ფუნქცია თავის თავს იძახებს ჩვენ კი
    იმიტომ ვიყენებთ ამას, რომ ყოველ ჯერზე როდესად რაღაცის თქმა
    დაგვჭირდება მზად იყოს სასაუბროდ ჩვენი ბოტი

    // კოდში მოათავსეთ Switch რომლითაც დააპროგნოზებთ სასაუბრო
    // სიტყვებს ააწყობთ მინი ჩათ ბოტს.
    მაგ. 
    """"
      case "გამარჯობა":
        alert("გამარჯობა");
        break;
    """"
*/


  // >>> კოდი დაწერეთ აქ გამოიყენეთ Switch
   const bot = document.getElementById("bot")
   bot.addEventListener("click", myFun())
   function myFun() {
     let x = prompt("მე მზად  ვარ პასუხისათვის")
     switch(x){
       case 'გამარჯობა':
       alert('მოგესალმებით რით შემიძლია დაგეხმაროთ?');
       break; 
       case 'მაინტერესებს თუ გაქვთ მიწოდება თბილისის მასშტაბით':
        alert('დიახ, მიწოდება გვაქვს როგორც თბილისში ასევე მთელი საქართველოს მასშტაბით.');
         break;
         case 'გასაგებია. და მიწოდება რამდენ ხანში ხდება გამოწერიდან?':
           alert('გამოწერიდან მეორე დღეს.');
           break;
           case 'გასაგებია მადლობა':
             alert ('მადლობა თქვენ. სხვა თუ არაფერი გაინტერესებთ დაგემშვიდობებით. წარმატებული დღე');
          break; 
  
  
    }
  
  

  //

//   // რეკურსიული ფუნქცია
   myFun()
  
 }




