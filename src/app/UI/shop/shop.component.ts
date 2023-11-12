import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  products: any[] = [];

  constructor() {
    // Agregar productos de prueba
    this.products = [
      {
        nombre: 'Producto 1',
        marca: 'Marca A',
        precio: 100,
        imagen: 'url-imagen-1.jpg',
        id: 1
      },
      {
        nombre: 'Producto 2',
        marca: 'Marca B',
        precio: 150,
        imagen: 'url-imagen-2.jpg',
        id: 2
      },
      // Agregar más productos según sea necesario
    ];
  }

  // Resto del código del componente
}