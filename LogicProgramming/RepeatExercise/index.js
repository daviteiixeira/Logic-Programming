var x = "";
var y = x*10;

x = prompt("Digite o número inicial de alguma tabuada:");

while (x != y) {
    var a = x
    var b = x*2
    var c = x*3
    var d = x*4
    var e = x*5
    var f = x*6
    var g = x*7
    var h = x*8
    var i = x*9
    var j = x*10
    alert(`A tabuada escolhida foi do número: ${x}\n\n${x}x1: ${a}\n${x}x2: ${b}\n${x}x3: ${c}\n${x}x4: ${d}\n${x}x5: ${e}\n${x}x6: ${f}\n${x}x7: ${g}\n${x}x8: ${h}\n${x}x9: ${i}\n${x}x10: ${j}`);
    x = prompt("Digite o número inicial de alguma próxima tabuada:");
}