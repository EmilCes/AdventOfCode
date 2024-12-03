import { getReportsListsFromInput } from "./day02.utils.ts";

function getNumberOfSafeReports(reports: number[][]) {    

    let isIncreasing = false;
    let isDecreasing = false;
    let safeReports = 0;

    reports.forEach(report => {
        let safeReport = false;
        for(let i = 0; i < report.length; i++) {

            let currentDistance = 0;
            
            if (i + 1 < report.length) {
                currentDistance = report[i] - report[i + 1];
            } else {
                break;
            }

            if (currentDistance > 0)
                isDecreasing = true;
                
            if (currentDistance < 0)
                isIncreasing = true;
                
            if (currentDistance === 0) {
                safeReport = false;
                break;
            }

            if (Math.abs(currentDistance) > 0 && Math.abs(currentDistance) <= 3 && isDecreasing !== isIncreasing)
                safeReport = true;
            else {
                safeReport = false;
                break;
            }
        }

        if (safeReport && isDecreasing !== isIncreasing)
            safeReports++;

        isIncreasing = false;
        isDecreasing = false;
    })

    return safeReports;
}

const reports = await getReportsListsFromInput('../../inputs/day02.input.txt');
const answer = getNumberOfSafeReports(reports);
console.log(answer);