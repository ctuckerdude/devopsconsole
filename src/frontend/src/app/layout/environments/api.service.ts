import {Observable} from "rxjs";
import {RepoInfo} from "./repo.info";

export interface ApiService {
  retrieveRepoInfoList(): Observable<RepoInfo[]>
  deployEnvironment(environmentId: string): string
}
