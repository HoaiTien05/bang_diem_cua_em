function myFuntion1() {
    var a = document.getElementById('semester1').value;
    a = parseInt(a);
    var b = document.getElementById('semester2').value;
    b = parseInt(b);
    var c = document.getElementById('chose');
    var value = c.options[c.selectedIndex].value;
    value = parseInt(value);
    var kq;
    switch (value) {
        case 1:
            kq = (a + (b * 2)) / 3;
            kq = parseFloat(kq);
            document.getElementById('summarise').value = kq;
        case 2:
            kq = ((a * 2) + (b * 3)) / 5;
            kq = parseFloat(kq);
            document.getElementById('summarise').value = kq;
        case 2:
            kq = ((a * 3) + (b * 5)) / 7;
            kq = parseFloat(kq);
            document.getElementById('summarise').value = kq;
    }
    if (kq >= 9) {
        document.getElementById('display').innerHTML = "Hoc sinh gioi";
        document.getElementById('display').style.color = "red";
    }
    if (kq >=7 && kq < 9) {
        document.getElementById('display').innerHTML = "Hoc sinh kha";
        document.getElementById('display').style.color = "blue";
    }
    if (kq >= 5 && kq < 7) {
        document.getElementById('display').innerHTML = "Hoc sinh Trung binh";
        document.getElementById('display').style.color = "yellow";
    }
}
function myFuntion2() {
    document.getElementById('semester1').value = "";
    document.getElementById('semester2').value = "";
}     