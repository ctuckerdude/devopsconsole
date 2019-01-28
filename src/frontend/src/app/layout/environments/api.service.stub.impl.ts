import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import {RepoInfo} from "./repo.info";
import { of } from 'rxjs';

Injectable()
export class ApiServiceStubImpl implements ApiService {
  constructor() {
  }

  retrieveRepoInfoList(): Observable<RepoInfo[]> {
    return of([
      new RepoInfo({"name": "kube1", "statusMessage": "active", "slug": "kube1"}),
      new RepoInfo({"name": "kube2", "statusMessage": "active", "slug": "kube2"}),
    ]);

  }

  deployEnvironment(environmentId: string): string {
     console.log("deployEnvironment: environmentId: " + environmentId);
     return "{'status': 'ok'}";
  }
}
