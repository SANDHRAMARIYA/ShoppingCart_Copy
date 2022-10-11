import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private newhttp:HttpClient) { }

viewshop=()=>{
  return this.newhttp.get("https://fakestoreapi.com/products")
}
}
