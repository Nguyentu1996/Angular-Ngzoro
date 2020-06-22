import { Injectable, Inject } from '@angular/core';
import { StorageService, SESSION_STORAGE } from 'ngx-webstorage-service';
const STORAGE_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class StoragesService {

  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,

  ) { }
  public getToken(){
    return this.storage.get(STORAGE_KEY);
  }
  public removeToken(){
    return this.storage.remove(STORAGE_KEY);
  }
}
