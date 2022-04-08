function myresult() {
    let number = parseInt(document.getElementById("number").value);
    let number1 = [];
    for (let i = 0; i < number;i++) {
        var phatsinh = Math.floor(Math.random()* 10 + 1);
        number1.push(phatsinh)
    }
    function snt(number) {
        if (a < 2) {
            return false;
        }
        else {
            for (let i = 2; i < number; i++) {
               if (number % i == 0) {
                   return false;
               }
               return true;
            }
        }
    }
    function solonnhat(arr) {
        let big = arr[0];
        for (let i = 1; i <arr.length; i ++) {
            if (big < arr[i]) {
                big = arr[i];
            }
        }
        return big;
    }  
    let big=solonnhat(number1);
    
    function daysole(arr){
        let sole = [];
        for (let i = 0; i < arr.length; i ++) {
            if (arr[i] % 2 != 0) {
                sole.push(arr[i]);
            }
        }
        return sole;
    }
    function daysochan(arr) {
        let sochan = [];
        for (let i = 0; i < arr.length; i ++) {
            if (arr[i] % 2 == 0) {
                sochan.push(arr[i]);
            }
        }
        return sochan;
    }
    let vidu=daysole(number1);
    let vidu2=daysochan(number1)
    document.getElementById("result").innerHTML=`Dãy số là: ${number1} <br> Ta có dãy số lẻ là ${vidu} <br> Dãy số chẵn là ${vidu2} `;
}
