// 함수선언
function getArea (width, height) {
    function another() {// 중첩 함수
        console.log("anoter");
    }

    another();
    let area = width * height;

    return area;
}

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);
getArea(120, 200);