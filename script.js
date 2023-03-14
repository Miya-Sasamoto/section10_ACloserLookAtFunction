'use strict';

// const bookings = []; //空の配列を作る
//
// const createBooking = function(flightNum,
//   numPassager = 1,
//   // price = 100000){ //最新ではここの関数の引数の定義のところでデフォルト値を設定することができる。ES6だよーーん。
//   price = 100000 * numPassager){ //このように式を渡すこともできる！
// //↓これは古いバージョンのデフォルトの設定の仕方
//   // numPassager = numPassager || 1; //これを書くことで、下でcreateBooking("LH123")のようにnumPassengerを指定しなくても、デフォルト？っていうか、ないなら１が表示されるようになる。
//   // price = price || 100000; //ここも、デフォルト的な感じでここを指定することが大事ね！
//
//   const booking = {
//     flightNum,
//     numPassager,
//     price
//   }
//
//   console.log(booking);
//   bookings.push(booking); //配列に押し込む。
// }
//
// createBooking("LH123"); //　flightNumだけ書いて、他の2つは書かなかった。
// createBooking("LH123",2, 80000);//この場合はもちろん、ここで引数を渡してるから、上のあるデフォルトは何にもなりません
// createBooking("LH321",33); //この場合は、priceは上のところから計算がされますので、33* 100000でーす。3300000。上から指示が降りるから、これよりも上に式が書いてあることが重要。
//
// // createBooking("LH123" , , 1000); //何かをスキップすることはできない。
// createBooking("LH123" , undefined,1000) //undefinedだったら自動できにfalseと感じてデフォルト値を採用してくれるからこのやり方でいいよ。

// const flight = "LH234";
// const miya = {
//   name:  "Miya Sasamoto",
//   passport: 23455437362
// }
//
// const checkIn = function(flightNum,passenger){ //checkInはfunction箱の2つを使う。
//   flightNum = "LH999";
//   passenger.name = "Ms." + passenger.name;　// miya のなまえのところにmsをつける。ここはmiyaオブジェクトを操作しているのと一緒。
//
//   if(passenger.passport === 23455437362){ //一緒だから！
//     alert ("Check In!")
//   }else{
//     alert ("WRONG!!");
//   }
// }
//
// // checkIn(flight,miya); // 上のcheckInのやつで使うのは、上で定義したflightとmiyaだね。
// // console.log(flight); //でもここが、LH999とcheckInでやったのに、LH234のまま。flightNum = flightとなることがわかるよね？
// // console.log(miya);
//
// const newPassport = function(person){
//   person.passport = Math.trunc(Math.random() * 30000000 );
// }
//
// newPassport(miya);
// checkIn(flight,miya); //一回check in!とでて、その後WRONってでる。なぜならnewPassportで書き換えをしているから。
//
// const oneWord = function(str){
//   return str.replace(/ /g, "").toLowerCase(); //文字列を受け取り、空白のない形にする
// }
// //
// const upperFirstWord = function (str){
//   const [first, ...others]= str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };
// // const upperFirstWord = function (str) {
// //   const [first, ...others] = str.split(' ');
// //   return [first.toUpperCase(), ...others].join(' ');
// // };
//
// const transFormer = function(str,fn){
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`)
//
//   console.log(`Transformed by : ${fn.name}`);
//
// }
//
//
// transFormer("JavaScript is the best",upperFirstWord);
// //Original string: ${str}`); //最初だけ大文字　Original string: JavaScript is the bestだよ。
// //Transformed string: ${fn(str)}`)//最初がuppercaseに　Transformed string: JAVASCRIPT is the best
// //Transformed by : ${fn.name}`);// Transformed by : upperFirstWord。関数の名前ということ。fn.name で。
// console.log("--------");
// transFormer("JavaScript is the best",oneWord);
// // Transformed stringでjavascriptisthebestになる。空白のない形だからね。
// //Transformed by : ${fn.name}`はoneWord
//
// const high5 = function(){
//   console.log("👋");
// }
//
// document.body.addEventListener("click",high5); //どこでもいいから画面のbodyを押すと、コンソールに表示される。
//
// ["Miya","Noel","Maria"].forEach(high5);//コンソールに3つの👋が出た！

// const greet = function(greeting){ //引数にgreatingがある
//   return function(name){　
//     console.log(`${greeting}! ${name}!!`);
//   }
// }
//
// const greeterHey = greet("hey"); // 引数にheyがはいる。
// greeterHey("Miya"); //hey!Miya!!
// greeterHey("Noel");//hey!Noel!!
// //いろんなところに新しいやつ作って、はいいれて、はいいれてってやっている。
//
// greet("Hello")("Maria"); //Hello! Maria!と一回で呼ぶことも可能。へぇー〜ー
//
// const greetArr = greeting => name => console.log(`${greeting}! ${name}!!`);
// greetArr("Good Evenng")("Steven");
// //アロー関数で書くこともできる。よくわかんないけど、こんがらがる。jonasも、アロー関数はわかりづらいって言ってる。

// const lufthansa = {
//   airline : "lufthansa",
//   iateCode : "LH",
//   booking: [],
//   book(flightNum, name){ //引数の中に関数？を作る。だからairlineとかはthis.を使って引っ張ってくる。
//     console.log(`${name} booked a seat on ${this.airline} flight${this.iateCode} ${flightNum}`);
//     this.booking.push({
//       flight: `${this.iateCode}${flightNum}`,
//       name
//     }); //配列にpushしている。って感じか。book の中に入っているから、flightNumの時thisは必要ないよね。
//
//   },
//
// };
//
// lufthansa.book("234" , "Miya"); //Miya booked a seat on lufthansa flightLH 234
// lufthansa.book("321" , "Noel"); //Noel booked a seat on lufthansa flightLH 321 テンプレートリテラルで！
// // console.log(lufthansa);//{airline: 'lufthansa', iateCode: 'LH', booking: Array(2), book: ƒ}
//
// const eurowings = {
//   airline: "eurowings",
//   iateCode: "EW",
//   booking: [],
// };
//
// const book  = lufthansa.book;
//
// // book(23,"Sarah"); //これは使いません。
// book.call(eurowings, 23 , "Sarah"); //最初に呼び出したい関数名を入れる。あくまでもbookだから、引数は二つ。
// console.log(eurowings);//{name: 'eurowings', iateCode: 'EW', booking: Array(1)}
// //名前はeurowings、flightはEW23となる。
// book.call(lufthansa, 38, "Miya");
// console.log(lufthansa);//name  lufthansa, iateCode:EW, となる。上と構造は一緒。
// //ただこっちは、bookingが3つある。上の二つがあるから！
//
// const swiss = {
//   airline : "Swiss Airline",
//   iateCode: "SA",
//   booking: []
// }
//
// book.call(swiss, 40, "Maria");
// console.log(swiss); //{name: 'Swiss Airline', iateCode: 'SA', booking: Array(1)}
//
//
// //要は他で定義したやつを何度も書かなくても繰り返し使えるよ！ということです！！それが,callでーーす。
// //次は//apply だよーん
//
// console.log("------")
// const flightData = [583, "George"];
// book.apply(swiss, flightData); //George booked a seat on Swiss Airline flightSA 583。bookを呼んでいるからそこに含まれているテンプレートリテラルが呼び出された！
// console.log(swiss);//{airline: 'Swiss Airline', iateCode: 'SA', booking: Array(2)}
//
//
// book.call(swiss, ...flightData);//George booked a seat on Swiss Airline flightSA 583.
// //book.apply(swiss, flightData);と全く同じ結果
// //あまり大きな違いはわからないが、callもapplyも同じようにやっているのだ。
//
// //ここからはbindの勉強です。
// console.log("---BIND---");
//
// const bookEW = book.bind(eurowings);
// const bookSW = book.bind(swiss);
// const bookLH = book.bind(lufthansa);
//
// bookEW(23,"Steven"); //Steven booked a seat on eurowings flightEW 23となる。　bookだから引数は(flightNum, name)だから23とSteven。でも、flightEWとeurowingsのiateCodeが使われているのは、bindでeurowingsを使っているから！
// bookSW(45,"George");//George booked a seat on Swiss Airline flightSA 45
// bookLH(67,"Kelly"); //Kelly booked a seat on lufthansa flightLH 67　これの方が書くの楽かもね！一回だけbindすればいいから！
//
// const bookEW23 = book.bind(eurowings,23);
// bookEW23("Elsa");//Elsa booked a seat on eurowings flightEW 23　名前を渡してあげるだけでいい.
// bookEW23("Romy");//Romy booked a seat on eurowings flightEW 23
//
// //With addEventListener
// console.log("---Examples---");
// lufthansa.planes = 300;
// console.log(lufthansa);///{airline: 'lufthansa', iateCode: 'LH', booking: Array(4), planes: 300, book: ƒ}と表示される
// lufthansa.buyPlane = function(){
//   // console.log(this);
//   this.planes ++;
//   console.log(this.planes);
// }
//
// // lufthansa.buyPlane(); 301と表示された！
// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
//
//
// console.log("---Examples 2---");
// const addTax = (rate,value)=> value + value * rate;
// console.log(addTax(0.1,200)); //220となる。
// //⇨これがアロー関数を使ったやり方。
//
// const addVAT = addTax.bind(null,0.23);
// // addTax = value => (rate,value)=> value + value * 0.23;という事になる。
// console.log(addVAT(180)); //221
//
// //このような書き方もできる。以下
//
// const addTaxRate = function(rate){
//   return function(value){
//     return value + value * rate;
//   }
// }
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(200));
// console.log(addVAT2(500));
//
// // Coding Challenge #1
//
// /*
// Let's build a simple poll app!
//
// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
//
// Here are your tasks:
//
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)
//
//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
//
// HINT: Use many of the tools you learned about in this and the last section 😉
//
// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
//
// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
//
// GOOD LUCK 😀
// */
//
//
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
// //番号の取得
//   registerNewAnswer() {
//     const answer = Number(
//         prompt(
//           `${this.question}\n${this.options.join("\n")}\n("Wright your number")`//\n改行
//         )
//     );
//
//   //答えの登録
//   typeof answer === "number" && answer < this.answers.length && this.answers[answer]++; //めっちゃ長いけど、「数字」で、answersの数以下だから。
//   this.displayResults("string");
//
//   console.log(this.answers);
//   },
//
//   displayResults(type = "array"){
//     if (type === "array"){
//       console.log(this.answers)
//     }else if(type === "string"){
//       console.log(`Poll results are ${this.answers.join(",")}`) //0から3を打つといい。
//     }
//   }
// };
//
// // poll.registerNewAnswer();
//
// document.querySelector(".poll").addEventListener("click",poll.registerNewAnswer.bind(poll));
// //htmlのpollクラスがついたボタンを押下で、promptが出てくる。
//
// //あとでちゃんと復習してください。

 //一度きりの関数というものがある。このテクニックは必要。

//  const runOnce = function(){
//    console.log("This will be never run again!");
//  }
//
//  runOnce(); // This will be never run again!だよん。でもこのままだと、普通にもう一回実行することができるよね。
//
//
//  (function(){
//    console.log("This is how we do");
//  })();
//  //jsを騙す。かっこで囲んで、その後に関数の()を入れる。姑息。
//  //これをImmedietly Invoked Function Expression(IIFE)と呼ぶらし。
//
// //アロー関数でのIIFEのやり方
// (() => console.log("This is how we do part2!"))();
// //とりあえず、かっこで包んで、かっこを最後につけりゃいい。


//クロージャー？はにゃ？？
//明示的に作るものではないことを理解。自動的にそうなるものである。スコープチェーンとかが関係ある。
const secureBooking = function(){
  let passengerCount = 0;

    return function(){
      passengerCount ++;
      console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking(); //secureBooking()関数を、bookerに格納する。
booker(); //1passengers
booker(); //2 passengers
booker(); // 3passengers

console.dir(booker);//console.dir()は指定された JavaScript オブジェクトのプロパティをすべてコンソール上で見る方法
//この場合
// ƒ anonymous()length: 0
// name: ""
// prototype: {constructor: ƒ}
// arguments: (...)
// caller: (...)
// [[FunctionLocation]]: script.js:316
// [[Prototype]]: ƒ ()
// [[Scopes]]: Scopes[3]　と表示
