import { Component } from '@angular/core';
import { LineStyle } from '@progress/kendo-angular-charts';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent {

  public style: LineStyle = "normal";

}
