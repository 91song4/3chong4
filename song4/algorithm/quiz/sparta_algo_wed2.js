/*

    문제 설명

    점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.
    [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
    주어진 네 개의 점을 두 개씩 이었을 때,
    두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.


    제한사항

    0 ≤ dots의 원소 ≤ 100
    dots의 길이 = 4
    dots의 원소의 길이 = 2
    dots의 원소는[x, y] 형태이며 x, y는 정수입니다.
    서로 다른 두개 이상의 점이 겹치는 경우는 없습니다.
    두 직선이 겹치는 경우(일치하는 경우)에도 1을 return 해주세요.
    임의의 두 점을 이은 직선이 x축 또는 y축과 평행한 경우는 주어지지 않습니다.

*/
function solution(dots) {
    const dotA = dots[0];
    const dotB = dots[1];
    const dotC = dots[2];
    const dotD = dots[3];

    const numOfCase = [
        [[dotA, dotB], [dotC, dotD]],
        [[dotA, dotC], [dotB, dotD]],
        [[dotA, dotD], [dotB, dotC]]
    ];

    const X = 0;
    const Y = 1;

    let answer = 0;

    for (const slope of numOfCase){
        const xLenOfA = slope[0][1][X] - slope[0][0][X];
        const yLenOfA = slope[0][1][Y] - slope[0][0][Y];
        
        const xLenOfB = slope[1][1][X] - slope[1][0][X];
        const yLenOfB = slope[1][1][Y] - slope[1][0][Y];

        let slopeA = (Math.abs(yLenOfA)) / (Math.abs(xLenOfA));
        let slopeB = (Math.abs(yLenOfB)) / (Math.abs(xLenOfB));
        
        if (slopeA === slopeB){
            answer = 1;
            break;
        }
    }
    
    return answer;
}

console.log(solution([[1, 4], [9, 2], [3, 8], [11, 6]]));
console.log(solution([[3, 5], [4, 1], [2, 4], [5, 10]]));