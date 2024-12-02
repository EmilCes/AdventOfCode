import { getListsFromInput } from "./day01.utils.ts";


function totalDistanceBetweenLists(
    leftSide: number[],
    rightSide: number[],
) {
    leftSide.sort();
    rightSide.sort();
    let totalDistance = 0;

    for (let i = 0; i < leftSide.length; i++) {
        totalDistance += Math.abs(leftSide[i] - rightSide[i]);
    }

    return totalDistance;
}

const { leftSide, rightSide } = await getListsFromInput("../../inputs/day01.input.txt");
const answer = totalDistanceBetweenLists(leftSide, rightSide);
console.log(answer);