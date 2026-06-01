import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  productData:any=signal("")
  protected readonly title = signal('Services');
  constructor(private productservice: ProductService){}
  ngOnInit(){
    const data=this.productservice.getProducts()
    console.log(data);
    this.productData.set(data)
  }
}
