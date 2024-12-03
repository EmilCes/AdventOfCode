export async function getReportsListsFromInput(filePath: string) {
    const input = await Deno.readTextFile(filePath);
    const lines = input.split("\n");

    const reports: number[][] = [];

    for (const line of lines) {
        const numbersOfLine = line.trim().split(/\s+/).map(num => parseInt(num, 10));
        reports.push(numbersOfLine);
    }

    return reports;
}