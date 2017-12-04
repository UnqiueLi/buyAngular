import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products:Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products=[
      new Product(1,"第一个商品",3.99,4.5,"这是我的第一个商品",["日常用品","日常用品"]),
      new Product(2,"第二个商品",2.99,2.5,"这是我的第二个商品",["硬件产品","硬件产品"]),
      new Product(3,"第三个商品",1.99,1.5,"这是我的第三个商品",["化妆产品","化妆产品"]),
      new Product(4,"第四个商品",8.99,3.5,"这是我的第四个商品",["零食干果","零食干果"]),
      new Product(5,"第五个商品",7.99,4.5,"这是我的第五个商品",["蔬菜水果","蔬菜水果"]),
      new Product(6,"第六个商品",5.99,2.5,"这是我的第六个商品",["移动产品","移动产品"]),
      new Product(7,"第七个商品",6.99,3.5,"这是我的第七个商品",["哈哈哈哈","哈哈哈哈"]),
      new Product(8,"第八个商品",4.99,1.5,"这是我的第八个商品",["啦啦啦啦","啦啦啦啦"]),
    ]
  }

}
//定义产品类
export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){}
}