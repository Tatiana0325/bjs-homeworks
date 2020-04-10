function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    //sleep(500);

    //console.log('Функция вызвана не из памяти');

    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }

function compareArrays(arr1, arr2) {
    if ((arr1.length == 0) && (arr2.length == 0)) {
        return true;
    }

    if ((arr1.length == arr2.length) && (arr1.every((item, i) => (item == arr2[i])))) {
            return true;
        } else {
            return false;
        }
}

function memorize(func, limit) {
    const memory = [];

    return function() {
        let arr = Array.from(arguments);

        let args = memory.find(mem => compareArrays(mem.args, arr));

        if (args == undefined) {
            let res = func(...arr);
            memory.push({args: arr,
                result: res
            });

            if (memory.length == limit) {
                memory.shift();
            }

            return res;
        } else {
            //console.log('Функция вызвана из памяти');
            
            return args.result;
        };
    }
}

function testCase(testFunction, label) {
    const arr = [];
    arr.push(Array.from(arguments));

    console.time(label);

    for (let i = 0; i < arr.length; i++) {
        arr.forEach(ar => testFunction(...ar)); 
        
        console.timeEnd(label);
    }    
}

testCase(sum, 12); //если работает отсрочка времени работы, 
//то время работы складывается из времени отсрочки и времени работы функции 501.39501953125ms
//без времени отсрочки равно 0.13623046875ms
testCase(memorize, 12);
//в случае отсрочки времени у функции sum, у функции memorize время работы = 0.2041015625ms
//если у sum отсрочку убрать, то время memorize =  0.159912109375ms, полчуется, что функция memorize
//работает немного дольше, чем функция sum, что говорит о том, что функции memorize нужно чуть больше времени,
//для того, чтобы записать в массив работу sum и пройти условие и вывести результат работы самой функцци sum
//либо найти результат из массива. 
