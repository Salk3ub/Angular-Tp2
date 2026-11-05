import { Routes } from '@angular/router';
import { Presentation } from './components/front/presentation/presentation';
import { BookList } from './components/front/book-list/book-list';
import { Aboutus } from './components/front/aboutus/aboutus';
import { NovelList } from './components/front/novel-list/novel-list';
import { PoetryList } from './components/front/poetry-list/poetry-list';
import { BiographyList } from './components/front/biography-list/biography-list';

export const routes: Routes = [
  { path: 'presentation', title: 'Présentation', component: Presentation },
  {
    path: 'Liste des Livres ',
    title: 'Books',
    component: BookList,
    children: [
      { path: 'novel-list', title: 'Romans', component: NovelList },
      { path: 'poetry-list', title: 'Poésie', component: PoetryList },
      { path: 'biography-list', title: 'biographies', component: BiographyList },
      { path: '', redirectTo: 'novel-list', pathMatch: 'full' },
    ],
  },
  { path: 'A propos', title: 'About', component: Aboutus },
  { path: '', redirectTo: 'presentation', pathMatch: 'full' },
];
