import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-umidade',
  templateUrl: './umidade.page.html',
  styleUrls: ['./umidade.page.scss'],
})
export class UmidadePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['home'])
  }

}
