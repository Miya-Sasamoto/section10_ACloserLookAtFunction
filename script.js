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

const flight = "LH234";
const miya = {
  name:  "Miya Sasamoto",
  passport: 23455437362
}

const checkIn = function(flightNum,passenger){ //checkInはfunction箱の2つを使う。
  flightNum = "LH999";
  passenger.name = "Ms." + passenger.name;　// miya のなまえのところにmsをつける。ここはmiyaオブジェクトを操作しているのと一緒。

  if(passenger.passport === 23455437362){ //一緒だから！
    alert ("Check In!")
  }else{
    alert ("WRONG!!");
  }
}

// checkIn(flight,miya); // 上のcheckInのやつで使うのは、上で定義したflightとmiyaだね。
// console.log(flight); //でもここが、LH999とcheckInでやったのに、LH234のまま。flightNum = flightとなることがわかるよね？
// console.log(miya);

const newPassport = function(person){
  person.passport = Math.trunc(Math.random() * 30000000 );
}

newPassport(miya);
checkIn(flight,miya); //一回check in!とでて、その後WRONってでる。なぜならnewPassportで書き換えをしているから。
