// 1、二维数组中的查找
function Find(target, array) {
    // write code here
    let ishave = false;
    for (var i=0; i<array.length; i++) {
        if (target >= array[i][0] && target <= array[i][array[i].length-1]) {
            for (var j=0; j<array[i].length; j++) {
                if (target == array[i][j]) {
                    ishave = true;
                }
            }
        }
    }
    console.log(ishave);
}
// 优化
function FindOptimization(target, array)
{
    let lenX = array.length,
        lenY = array[0].length;
    for(let i=lenX-1,j=0; i>=0 && j<lenY;){// 从左下开始比较
        if(target > array[i][j]){
            j++;// 右移
        }else if(target < array[i][j]){
            i--;// 上移
        }else{
            return true;
        }
    }
    return false;
}
// 测试
// let arr = [
// 			[1, 2, 8, 9],
// 			[2, 4, 9, 12],
// 			[4, 7, 10, 13],
// 			[6, 8, 11, 15]
// 		],
// 	t = 7;
// Find(t, arr);
// console.log(FindOptimization(t, arr));//true


// 2、替换空格
function replaceSpace(str) {
    // write code here
    let str_arr = str.split(' '),
    result = str_arr.join('%20');
    return result;
}
// 优化
function replaceSpaceOptimization(str) {
    // write code here
    return str.replace(/\s/g, '%20');//正则表达式\s匹配任意空白符
}
// 测试
// console.log(replaceSpace('We Are Happy.'));
// console.log(replaceSpaceOptimization('We Are Happy.'));// We%20Are%20Happy.


// 3、从尾到头打印链表
// js实现链表(链表节点为一个对象)
function ListNode(x){
    this.val = x;// 保存节点上的数据
    this.next = null;// 保存指向下一个节点的连接
}
function printListFromTailToHead(head)
{
    // write code here
    let arr = [];
    while (head) {
        arr.unshift(head.val);
        head = head.next;
    }
    return arr;
}
// 测试
// let list = new ListNode('head');
// let first = new ListNode('first');
// let second = new ListNode('second');
// list.next = first;
// first.next = second;
// console.log(printListFromTailToHead(list));// (3) ["second", "first", "head"]


//4、重建二叉树
// js实现二叉树(为一个对象)
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin) {
    // write code here
    var result = null;
    if (pre.length > 1) {
        // 在前序遍历中找到根节点，并弹出
        var root = pre.shift(),
            vinRootIndex = vin.indexOf(root),
            // 在中序遍历中找到左右子树(左右子树的中序遍历)
            vinLeft = vin.slice(0, vinRootIndex),
            vinRight = vin.slice(vinRootIndex+1);

        // 在前序遍历中找到左右子树(左右子树的前序遍历)
        var preLeft = pre.slice(0, vinLeft.length),
            preRight = pre.slice(vinLeft.length);

        // 记录结果，递归调用
        result = {
            val: root,
            left: reConstructBinaryTree(preLeft, vinLeft),
            right: reConstructBinaryTree(preRight, vinRight)
        } 
    } else if (pre.length === 1) {
        result = {
            val: pre[0],
            left: null,
            right: null
        }
    }
    return result;
}
// 测试
// console.log(reConstructBinaryTree([1,2,4,7,3,5,6,8], [4,7,2,1,5,3,8,6]));// {val: 1, left: {…}, right: {…}}


// 5、用两个栈来实现一个队列，完成队列的Push和Pop操作
let stack1 = [],
    stack2 = [];
function push(node)
{
    // write code here
    stack1.push(node);
}
function pop()
{
    // write code here
    if (stack2.length == 0) {
        if (stack1.length == 0) {
            return false;
        } else {
            while (stack1.length !== 0) {
                stack2.push(stack1.pop());
            }
        }
    }
    return stack2.pop();
}
// 测试 
// 队头添加
// push(1);
// push(2);
// push(3);
// 队尾弹出
// console.log(pop());// 1
// console.log(pop());// 2
// console.log(pop());// 3


// 6、旋转数组中的最小数字
function minNumberInRotateArray(rotateArray)
{
    // write code here
    let len = rotateArray.length;
    if (len == 0 ) {
        return 0;
    } else {
        for (let i=len-1; i>=0; i--) {
            if( rotateArray[i] < rotateArray[i-1]) {
                return rotateArray[i];
            }
        }
    }
}
// 优化
function minNumberInRotateArrayOptimization(rotateArray)
{
    // write code here
    let arr = rotateArray.replace(/\[|\]/g,'').split(',');
    return Math.min(...arr);
}
// 测试
// console.log(minNumberInRotateArray([3, 4, 5, 1, 2]));// 1
// console.log(minNumberInRotateArray([]));// 0
// console.log(minNumberInRotateArrayOptimization('[3, 4, 5, 1, 2]'));// 1
// console.log(minNumberInRotateArrayOptimization('[]'));// 0


// 7、斐波那契数列
// 1 1 2 3 5 8 13 21
function Fibonacci(n)
{
    // write code here
    if (n <= 1) {
        return n;
    } else {
        // 方法1：直接生成斐波那契数列的第n项
        // var f0 = 0,
        //     f1 = 1;
        // for (let i=2; i<=n; i++) {
        //     var f2 = f0 + f1;
        //     f0 = f1;
        //     f1 = f2;
        // }
        // return f2;
        // 方法2：用数组记录斐波那契数列
        let arr = [0, 1];
        for (let i=2; i<=n; i++) {
            arr[i] = arr[i-1] + arr[i-2];
        }
        return arr[n];
    }
}
// 测试
// console.log(Fibonacci(7));// 13


// 8、跳台阶
// 题目：一只青蛙一次可以跳上1级台阶或2级，求该青蛙跳上一个n级的台阶总共有多少种跳法(先后次序不同算不同的结果)
// 思路：假设第一次跳的是一阶，那么剩下n-1阶台阶，跳法为f(n-1)；假设第一次跳的是二阶，那么剩下n-2阶台阶，跳法为f(n-2)；那么n阶台阶的跳法f(n)=f(n-1)+f(n-2)
function jumpFloor(number)
{
    // write code here
    if (number <= 1) {
        return number;
    } else {
        let arr = [1, 1];// 记录n级台阶对应的跳法
        for (let i=2; i<=number; i++) {
            // 最终结果就是斐波那契数列
            arr[i] = arr[i-1] + arr[i-2];
        }
        return arr[number];
    }
}
// 测试
// console.log(jumpFloor(3));// 3 


// 9、变态跳台阶
function jumpFloorII(number)
{
    // write code here
    if (number <= 2) {
        return number;
    } else {
        let arr = [1, 1, 2];// 记录n级台阶对应的跳法
        for (let i=3; i<=number; i++) {
            var len = arr.length;
            arr[i] = 0;
            for (let j=0; j<len; j++) {
                arr[i] += arr[j];
            }
        }
        return arr[number];
    }
}
// 优化
//f(1)=1,f(2)=2,f(3)=4...f(n)=2f(n-1)
function jumpFloorIIOptimization(number)
{
    // write code here
    if (number <= 0) {
        return 0;
    } else if(number == 1) {
        return 1;
    } else {
        return 2*jumpFloorIIOptimization(--number);// 递归调用       
    }
}
// 优化
// 乘2即左移1位
function jumpFloorIIOptimizationII(number)
{
    // write code here
    if (number >= 1) {
        return 1<<(--number);// 递归调用  
    } else {
        return 0;
    }   
}
// 测试
// console.log(jumpFloorII(4));// 8 
// console.log(jumpFloorIIOptimization(4));// 8 
// console.log(jumpFloorIIOptimizationII(4));// 8 
// console.log(jumpFloorII(5));// 16 
// console.log(jumpFloorIIOptimization(5));// 16 
// console.log(jumpFloorIIOptimizationII(5));// 8 