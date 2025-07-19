import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header';
import {Userinput} from './components/userinput/userinput';
import {Table} from './components/table/table';

@Component({
  selector: 'app-root',
  imports: [Header, Userinput, Table],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {

}
