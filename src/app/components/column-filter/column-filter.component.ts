import { Component } from '@angular/core';
import { IFilterAngularComp } from 'ag-grid-angular';
import { IFilterParams, AgPromise, IDoesFilterPassParams, IAfterGuiAttachedParams } from 'ag-grid-community';

@Component({
  selector: 'app-column-filter',
  templateUrl: './column-filter.component.html',
  styleUrl: './column-filter.component.scss'
})
export class ColumnFilterComponent implements IFilterAngularComp {
  agInit(params: IFilterParams<any, any>): void {
    // throw new Error('Method not implemented.');
  }
  isFilterActive(): boolean {
    return false;
    // throw new Error('Method not implemented.');
  }
  getModel() {
    // throw new Error('Method not implemented.');
  }
  setModel(model: any): void | AgPromise<void> {
    // throw new Error('Method not implemented.');
  }
  // refresh?(newParams: IFilterParams<any, any>): boolean {
  //   throw new Error('Method not implemented.');
  // }
  doesFilterPass(params: IDoesFilterPassParams<any>): boolean {
    return true;
    // throw new Error('Method not implemented.');
  }
  // onNewRowsLoaded?(): void {
  //   throw new Error('Method not implemented.');
  // }
  // onAnyFilterChanged?(): void {
  //   throw new Error('Method not implemented.');
  // }
  // getModelAsString?(model: any): string {
  //   throw new Error('Method not implemented.');
  // }
  // afterGuiAttached?(params?: IAfterGuiAttachedParams | undefined): void {
  //   throw new Error('Method not implemented.');
  // }
  // afterGuiDetached?(): void {
  //   throw new Error('Method not implemented.');
  // }
}
