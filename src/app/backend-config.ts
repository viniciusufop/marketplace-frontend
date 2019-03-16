import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendConfig {
  public BASE_URL = 'http://posgraduacaomarketplace.eastus.cloudapp.azure.com:9000';
}
