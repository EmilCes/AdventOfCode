export async function getListsFromInput(filePath: string) {
    const input = await Deno.readTextFile(filePath);

    const lines = input.split("\n");

    const leftSide: number[] = [];
    const rightSide: number[] = [];

    for (const line of lines) {
        const [left, right] = line.trim().split(/\s+/);
        leftSide.push(parseInt(left));
        rightSide.push(parseInt(right));
    }

    return {leftSide, rightSide};
}