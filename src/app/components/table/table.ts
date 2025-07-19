import {Component, signal} from '@angular/core';
import {Dataserviece} from '../../dataserviece';
import {Investment} from '../../data.module';
import {OnInit} from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [
    CurrencyPipe
  ],
  standalone:true,
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {
  results = signal<Investment[] | null>(null); // یا هر نوع داده‌ای که getData برمی‌گرداند
  constructor(private myServiece: Dataserviece) {}

  ngOnInit()
  {
    this.results.set(this.myServiece.getData)
  }



}
