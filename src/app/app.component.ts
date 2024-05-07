import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { GridOptions, GridReadyEvent } from 'ag-grid-community';
import 'ag-grid-enterprise';
import { ColumnFilterComponent } from './components/column-filter/column-filter.component';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public gridOptions: GridOptions = {
    defaultColDef: {
      floatingFilter: true
    },
    columnDefs: [
      {
        field: "athlete",
        rowGroup: true,
        filter: ColumnFilterComponent,
        // filter: "agTextColumnFilter"
       },
      { field: "year" },
      { field: "country" },
      { field: "sport" },
      { field: "gold" },
      { field: "silver" },
      { field: "bronze" },
      { field: "total" },
    ],
    autoGroupColumnDef: {
      filter: "agGroupColumnFilter"
    },
    onGridReady: (params: GridReadyEvent) => this.onGridReady(params)
  };

  @ViewChild(AgGridAngular)
  public grid!: AgGridAngular;

  constructor(private http: HttpClient) { }

  onGridReady(params: GridReadyEvent<any>) {
    this.http
      .get<any>("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .subscribe((data) => {
        this.grid.api.setGridOption('rowData', data);
      });
  }
}
