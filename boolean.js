/* Многие операторы сравнения известны нам из математики.

В JavaScript они записываются так:

Больше/меньше: a > b, a < b.
Больше/меньше или равно: a >= b, a <= b.
Равно: a == b. Обратите внимание, для сравнения используется двойной знак равенства ==. Один знак равенства a = b означал бы присваивание.
Не равно. В математике обозначается символом ≠, но в JavaScript записывается как a != b.
В этом разделе мы больше узнаем про то, какие бывают сравнения, как язык с ними работает и к каким неожиданностям мы должны быть готовы.

В конце вы найдёте хороший рецепт того, как избегать «причуд» сравнения в JavaScript.*/
let trueType = 2 > 1;
console.log(trueType)
let falseType= 2 < 1;
console.log(falseType)
const iAmAStudent = true;
const isSpring = true;
const javaSciptIsBeauty = true;
const constCanBeChanged = false;
const letCanBeChanged = true;
const nullIsADataType = true;
const nullIsAValue = false;
const iAmFromGrozny = true;