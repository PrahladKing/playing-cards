import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private dbPath = environment.firebaseURL
  private db = inject(AngularFireDatabase)
  expensesRef: AngularFireList<any>;
  constructor() { 
    this.expensesRef = this.db.list(this.dbPath);
  }


  getUsers() {
    return this.db.list("/users")
  }

}