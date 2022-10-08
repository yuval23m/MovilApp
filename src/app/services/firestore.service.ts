import { Injectable } from '@angular/core';
//FIREBASE
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  crearViaje(data: any, path: string, id: string) {
    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);
}

  leerViaje(){
    console.log('leyendo coleccion')
    this.firestore.collection('Viajes').valueChanges().subscribe( (res) =>{
      console.log(res);
    });
  }

}
