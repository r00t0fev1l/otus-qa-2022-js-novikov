
// Задание №1
console.log(switchKolobok('дедушка'))
console.log(switchKolobok('заяц'))
console.log(switchKolobok('медведь'))
console.log(switchKolobok('лиса'))
console.log(switchKolobok('тигр'))

function switchKolobok (str) {
    switch(str){
       case 'дедушка':
         return('я от дедушки ушел!');  
       case 'заяц':
         return('я от зайца ушел!');  
       case 'медведь':
         return('я от медведя ушел!')         
       default:
         return('меня съели!!!')
    }
}


// Задание №2

const str1 = 'Дед Мороз'
const str2 = 'Снегурочка'

console.log(newYear(str1))
console.log(newYear(str2))

function newYear(str1) {
    return` ${str1}!${str1}!${str1}!`;
}

