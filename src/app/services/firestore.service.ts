import { Injectable } from '@angular/core';
//FIREBASE
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  crearViaje(){
    this.firestore.collection('Viajes')
  }

  leerViaje(){
    console.log('leyendo coleccion')
    this.firestore.collection('Viajes').valueChanges().subscribe( (res) =>{
      console.log(res);
    });
  }

}
