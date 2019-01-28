export class RepoInfo {
  name = '';
  statusMessage = '';
  slug = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
