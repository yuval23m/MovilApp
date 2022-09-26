import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { IDatos } from '../interfaces/i-datos';

@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  datos: IDatos[]=[];
  private: Storage | null = null;
  constructor(private storage: Storage) { }

  guardarDatos(nombre:string, tele: string){
    const existe = this.datos.find(c => c.telefono = tele);
    if(existe){
      this.datos.unshift()
    }
  }

  async cargarDatos(){
    const misDatos = await this.storage.get('datos');
    if(misDatos){
      this.datos = misDatos;
    }
  }
}
