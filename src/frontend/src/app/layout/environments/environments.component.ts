import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {RepoInfo} from "./repo.info";
import {ApiService} from "./api.service";


@Component({
    selector: 'app-tables',
    templateUrl: './environments.component.html',
    styleUrls: ['./environments.component.scss']
})
export class EnvironmentsComponent implements OnInit {
    displayedColumns = ['name', 'statusMessage', "slug"];
    dataSource: MatTableDataSource<RepoInfo>;
    repoInfoList: RepoInfo[] = [];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(@Inject('ApiService') private apiService: ApiService) {
      // Assign the data to the data source for the table to render
      this.apiService.retrieveRepoInfoList()
        .subscribe(
          (repoInfoList) => {
            this.repoInfoList = repoInfoList;
            this.dataSource = new MatTableDataSource(this.repoInfoList);
          }
        );

        this.dataSource = new MatTableDataSource(this.repoInfoList);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    deployEnvironment(environmentId: string) {
      return this.apiService.deployEnvironment(environmentId);
    }
}
