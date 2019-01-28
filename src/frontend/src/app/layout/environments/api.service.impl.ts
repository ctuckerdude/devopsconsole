import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { ApiService } from './api.service';
import {RepoInfo} from "./repo.info";

Injectable()
export class ApiServiceImpl implements ApiService {

  public repoNameList;
  constructor(private http: HttpClient) {
  }

  public retrieveRepoInfoList(): Observable<RepoInfo[]> {
    console.log("retrieveRepoInfoList");
    return this.http
      .get<RepoInfo[]>('/api/repos');
  }

  deployEnvironment(environmentId: string): string {
     console.log("deployEnvironment: environmentId: " + environmentId);
     this.http
      .get<RepoInfo[]>('/api/deploy/' + environmentId).subscribe(
       () => console.log('done')
      );
     return "{'status': 'ok'}";
  }

}
