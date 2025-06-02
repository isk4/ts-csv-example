import { ReportGenerator } from "../Summary";

export class ConsoleReportGenerator implements ReportGenerator {
    run(report: string): void {
        console.log(report);
    }
}