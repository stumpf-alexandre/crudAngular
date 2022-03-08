import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private productService: ProductService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  //cria um novo produto e apresenta a mensagem
  createProduct(): void{
    this.productService.showMessage('Produto criado com sucesso!')
  }

  //deleta o produto e volta para a pagina de produtos
  cancel(): void{
    this.router.navigate(['/products'])
  }

}
