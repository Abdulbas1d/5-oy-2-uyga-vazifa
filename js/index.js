//////////----- Massivlarga doir misollar -----//////////



// 1-Misol

// Berilgan massivdagi so'zlardan uzunligi 5 ta belgidan kam bo'lganlarni olib tashlab, qolgan so'zlarning har birining bosh harfini katta harfga aylantiruvchi funksiyani yozing.

// let arr = ["salom", "true", 25, false, "hayrli tong"];
// let res = arr.filter(function(value) {
//     return value.length >= 5;
// })

// res = res.map(function(value) {
//     return value.charAt(0).toUpperCase() + value.slice(1);
// })
// console.log(res);




// 2-Misol

// Talabalarning ism va yoshlarini o'z ichiga olgan massivdan 20 yoshdan katta bo'lgan birinchi talabani topuvchi va uning ismini katta harf bilan qaytaruvchi funksiyani yozing.

// let students = [
//     {name: "John", age: 54},
//     {name: "David", age: 14},
//     {name: "Ali", age: 29},
//     {name: "Michael", age: 17},
// ];
// function findBigFromTwenty(arg) {
//     let user = arg.find(function(value) {
//         return value.age >= 20
//     })
//     let res = user ? user.name.toUpperCase() : "Bunday talaba mavjud emas";
//     return res
// }
// console.log(findBigFromTwenty(students));




// 3-Misol

// Berilgan mahsulotlarning narxlari massivini oladigan va faqat 10000 dan katta narxlarga ega mahsulotlarning umumiy narxini hisoblaydigan funksiyani yozing.

// let products = [10000, 21000, 8900, 7000, 15000];
// function countProducts(arg) {
//     let sum = 0;
//     arg.forEach(function(value) {
//         if (value > 10000) {
//             sum += value
//         }
//     })
//     return sum
// }
// console.log(countProducts(products));




// 4-Misol

// Berilgan massivdagi sonlarning hammasi musbat ekanligini tekshiring. Agar shunday bo'lsa, "Barcha sonlar musbat" degan xabarni, aks holda, "Musbat bo'lmagan sonlar bor" degan xabarni chiqaruvchi funksiyani yozing. Shu bilan birga, agar kamida bitta son 100 dan katta bo'lsa, "Katta son bor" degan xabarni chiqaruvchi shartni ham qo'shing.

// let arr = [10, 90, -87, 120, 98, -13];
// function findMusbatNumber(arg) {
//     arg.every(function(value) {
//         if (value > 0) {
//             console.log("Barcha sonlar musbat");
//         } else {
//             console.log("Musbat bo'lmagan sonlar mavjud");
//         }
//     })

//     arg.some(function(value) {
//         if (value >= 100) {
//             console.log("Katta son bor");
//         }
//     })
// }
// console.log(findMusbatNumber(arr));




// 5-Misol

// Berilgan massivdagi har bir elementni kvadratini hisoblab, bu qiymatlarni yangi massivga qo'shish uchun funksiyani yozing. So'ngra, yangi massivdagi elementlarni konsolga chiqaruvchi funksiyani yozing.

// let arr = [10, 5, 6, 7, 8];
// function countNumber(arg) {
//     let res = arg.map(function(value) {
//         return value ** 2
//     })
//     return res
// }
// function forEach(arg) {
//     arg.forEach(function(value) {
//         console.log(value);
//     })
// }
// console.log(countNumber(arr));




// 6-Misol

// Berilgan xodimlarning maoshlarini o'z ichiga olgan massivdan faqat 2000 dan kam bo'lmagan maoshlarni tanlab, ularni 10% ko'paytirib, barcha xodimlarning yangi umumiy maoshini hisoblaydigan funksiyani yozing.

// let staffSalary = [1700, 2200, 3200, 1100, 1900, 3210];
// function staffSalaryAdd(arg) {
//     let totalSalary = 0;
//     let res = arg.filter(function(value) {
//         return value <= 2000
//     })
//     let res1 = res.map(function(value) {
//         return value * 1.10
//     })
//     for (let i = 0; i < res1.length; i++) {
//         totalSalary += res1[i];
//     }
//     return totalSalary;
// }
// console.log("Yangilangan umumiy maosh: " + staffSalaryAdd(staffSalary));




// 7-Misol

// Berilgan talabalar ma'lumotlar massividan (ism, yosh, baho) kamida 80 ball olgan birinchi talabaning ismi va yoshini toping, so'ngra barcha 80 dan yuqori ball olgan talabalarni toping va ularning ismlarini katta harf bilan qaytaruvchi funksiyani yozing.

// let students = [
//     {name: "Alisher", age: 24, grade: 90},
//     {name: "Javohir", age: 31, grade: 76},
//     {name: "Doston", age: 14, grade: 88},
//     {name: "Bobur", age: 45, grade: 71}
// ];
// function findFirstStudent(students) {
//     for (let student of students) {
//         if (student.grade >= 80) {
//             return {
//                 name: student.name, age: student.age
//             }
//         }
//     }
//     return
// }
// function getStudentsHighGrade(student) {
//     let res = student.filter(function(value) {
//         return value.grade > 80;
//     })
//     let res1 = res.map(function(value) {
//         return value.name.toUpperCase();
//     })
//     return res1
// }
// let firstStudent = findFirstStudent(students);
// if (firstStudent) {
//     console.log("Birinchi talaba: " + "Ismi: " + firstStudent.name + " " + "Yoshi: " + firstStudent.age);
// } else {
//     console.log("80 dan yuqori ball olgan talaba topilmadi.");
// }
// let highGrades = getStudentsHighGrade(students);
// console.log("80 dan yuqori ball olgan talabalar: " + highGrades);








//////////----- Yozuvlarga doir misollar -----//////////



// 1-Misol

// Berilgan stringdagi barcha harflarni katta harfga aylantiruvchi funksiyani yozing.

// let arr = "Assalomu alaykum Mening ismim Alisher";
// function stringToUpperCase(str) {
//     return str.toUpperCase();
// }
// console.log(stringToUpperCase(arr));




// 2-Misol

// Berilgan stringda ma'lum bir substring mavjudligini tekshiruvchi funksiyani yozing.

// let arr1 = "Salom, dunyo!";
// let arr2 = "dunyo";
// function hasSubstring(str1, str2) {
//     return str1.includes(str2)
// }
// console.log(hasSubstring(arr1, arr2));




// 3-Misol

// Berilgan stringdagi barcha "JavaScript" so'zlarini "JS" so'ziga almashtiruvchi funksiyani yozing.

// let str = "Men JSni yaxshi ko'raman. JS juda kuchli dasturlash tili.";
// function replaceString(arr) {
//     return arr.replaceAll("JS", "JavaScript")
// }
// console.log(replaceString(str));




// 4-Misol

// Berilgan stringni so'zlar bo'yicha teskari tartibda qaytaruvchi funksiyani yozing.

// let arr1 = "Hello World";
// function reverseString(str) {
//     return str.split('').reverse().join(' ')
// }
// console.log(reverseString(arr1));




// 5-Misol

// Berilgan stringning boshida va oxirida bo'sh joylarni olib tashlovchi funksiyani yozing.

// let arr = '   Hello World      ';
// function emptySpace(str) {
//     return str.trim()
// }
// console.log(emptySpace(arr));