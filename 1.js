class LineStorage{
    getWord(){

    }
    addword(){

    }
    addLine(){

    }
}

class Input{
    readInput(){
        return prompt("Input")
    }
}

class CircularShifter{
    #storage = new LineStorage()//在js中#表示私有属性 private attribute

    shiftLine(){

    }
    getAShift(){

    }
}

let input = new Input()
let inputValue = input.readInput()
let lines = inputValue.split(',')
lines[lines.length-1] = lines[lines.length-1].substring(0, lines[lines.length-1].length-1)  
console.log(lines)
// //console.log(Input.readInput())//报错Input.readInput is not a fuction 去掉括号后 log undefined
/* 
de了一会儿的bug总算是解决了
先是通过在 浏览器控制台中 a = new String(123); a.substring(0,2); 找到了 substring中 s应该小写
然后验出js中不管是String还是Array都是length而没有Length
最后就是 突然想到 substring并不改变原值
需要再用=号对 line[lines.length - 1]再赋值才行
这么迟才发现我不停log不变的原因也是蠢了
*/