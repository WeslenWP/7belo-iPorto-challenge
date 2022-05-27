import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { CostumersService } from 'src/app/core/services/costumers.service';
import { Costumer } from './costumers';

@Component({
  selector: 'app-costumers',
  templateUrl: './costumers.component.html',
  styleUrls: ['./costumers.component.scss']
})
export class CostumersComponent implements OnInit {

  costumers: Costumer[] = [];

  constructor(private _costumersService: CostumersService) { }

  ngOnInit(): void {
    this._costumersService.getData().subscribe((res) => this.costumers = res.sort(() => Math.random() - 0.5).slice(0, 8))
  }

}
