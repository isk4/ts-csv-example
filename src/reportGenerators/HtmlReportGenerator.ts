import { ReportGenerator } from "../Summary";
import fs from 'fs';

export class HtmlReportGenerator implements ReportGenerator {
    run(report: string): void {
        let content = `<div>
            <h1>Analysis Results</h1>
            <p>${report}</p>
        </div>`;
        fs.writeFileSync('report.html', content);

        console.log('Report generated and available at report.html');
    }
}