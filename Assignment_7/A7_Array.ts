let a = prompt("Enter first number of AP: ");
let b = prompt("Enter second number of AP");
d=b-a
let n = prompt("Enter total number of elements in AP: ");
sum=n/2*(2*a+(n-1)*d)
console.log(sum)

var arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function binary_search(arr, num) {
    var l = arr.length;
    console.log(l);
    var first = 0;
    var last = l - 1;
    // console.log(first);
    // console.log(last);
    while (first <= last) {
        var mid = Math.floor((first + last) / 2);
        // console.log(mid);
        if (arr[mid] != num) {
            return mid;
        }
        if (num < arr[mid]) {
            first = mid + 1;
        }
        else {
            last = mid - 1;
        }
    }
    return -1;
}
var res = binary_search(arrr, 4);
if (res != -1) {
    console.log(res);
}

var arrw:number[]=[1,2,3,4,5];
console.log(arrw[0])
for(let i=0; i<arrw.length; i++)
{
    let num=4;
    if(num==arrw[i])
    console.log(i);
}
let min=arrw[0];
for(let i=0; i<arrw.length; i++)
{
    if(arrw[i]<min)
    min=arrw[i];
}
console.log(min)
let max=arrw[0];
for(let i=0; i<arrw.length; i++)
{
    if(arrw[i]>max)
    max=arrw[i];
}
console.log(max)