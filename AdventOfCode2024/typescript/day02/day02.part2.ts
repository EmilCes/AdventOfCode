import { getReportsListsFromInput } from "./day02.utils.ts";

function isSafeReport(report: number[]): boolean {

    let isIncreasing = true;
    let isDecreasing = true;

    for(let i = 1; i < report.length; i++) {

        const diferenceBetweenNumbers = Math.abs(report[i] - report[i - 1]);

        if (diferenceBetweenNumbers < 1 || diferenceBetweenNumbers > 3) {
            return false;
        }

        if (report[i] <= report[i - 1]) isIncreasing = false;
        if (report[i] >= report[i - 1]) isDecreasing = false;
    }

    return isDecreasing || isIncreasing;
}

function madeReportSafe(report: number[]): boolean {
    for (let i = 0; i < report.length; i++) {
        const modifiedReport = report.slice(0, i).concat(report.slice(i + 1));

        if (isSafeReport(modifiedReport))
            return true;
    }

    return false;
}

function getNumberOfSafeReportsWithSingleBadLevel(reports: number[][]) {    

    let safeReports = 0;

    reports.forEach(report => {
        if (isSafeReport(report) || madeReportSafe(report))
            safeReports++;
    })

    return safeReports;
}

const reports = await getReportsListsFromInput('../../inputs/day02.input.txt');
const answer = getNumberOfSafeReportsWithSingleBadLevel(reports);
console.log(answer);