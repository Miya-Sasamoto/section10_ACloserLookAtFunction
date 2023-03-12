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

const greet = function(greeting){ //引数にgreatingがある
  return function(name){　
    console.log(`${greeting}! ${name}!!`);
  }
}

const greeterHey = greet("hey"); // 引数にheyがはいる。
greeterHey("Miya"); //hey!Miya!!
greeterHey("Noel");//hey!Noel!!
//いろんなところに新しいやつ作って、はいいれて、はいいれてってやっている。

greet("Hello")("Maria"); //Hello! Maria!と一回で呼ぶことも可能。へぇー〜ー

const greetArr = greeting => name => console.log(`${greeting}! ${name}!!`);
greetArr("Good Evenng")("Steven");
//アロー関数で書くこともできる。よくわかんないけど、こんがらがる。jonasも、アロー関数はわかりづらいって言ってる。
