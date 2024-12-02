import { getListsFromInput } from "./day01.utils.ts";

function similarityScoreBetweenLists(leftSide: number[], rightSide: number[]) {

    const appearances: { [key: number]: number} = {};
    let similiarityScore = 0;

    rightSide.forEach((num: number) => {
        appearances[num] = appearances[num] ?? 0;
        appearances[num]++;
    });

    leftSide.forEach((num) => {
        similiarityScore += num * (appearances[num] ?? 0);
    })

    return similiarityScore;
}

const { leftSide, rightSide } = await getListsFromInput("../../inputs/day01.input.txt");
const answer = similarityScoreBetweenLists(leftSide, rightSide);
console.log(answer);
