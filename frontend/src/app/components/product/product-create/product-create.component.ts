import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null as any,
  };

  constructor(
    private productService: ProductService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }

  //cria um novo produto e apresenta a mensagem e voltar para a pagina de produto
  createProduct(): void{
   
      this.productService.showMessage('Produto criado com sucesso!');
      this.router.navigate(['/products']);
    
  }

  //deleta o produto e volta para a pagina de produtos
  cancel(): void{
    this.router.navigate(['/products']);
  }
}
