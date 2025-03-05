import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../data/mock-data';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink, DatePipe],
  template: `
    <article class="big-card">
      <img [src]="article.photoCover" [alt]="article.title" class="card-image">
      <div class="card-content">
        <span class="category">{{ article.category }}</span>
        <h2 class="title">
          <a [routerLink]="['/content', article.id]">{{ article.title }}</a>
        </h2>
        <p class="description">{{ article.description }}</p>
        <span class="date">{{ article.date | date:'dd/MM/yyyy' }}</span>
      </div>
    </article>
  `,
  styles: [`
    .big-card {
      background-color: #1a1a1a;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.3s ease;
      max-width: 800px;
      margin: 0 auto;
    }

    .big-card:hover {
      transform: translateY(-5px);
    }

    .card-image {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }

    .card-content {
      padding: 1.5rem;
    }

    .category {
      background-color: #ff0000;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
      font-size: 0.875rem;
      text-transform: uppercase;
    }

    .title {
      margin: 1rem 0;
      font-size: 1.75rem;
      line-height: 1.2;
    }

    .title a {
      color: #ffffff;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .title a:hover {
      color: #ff0000;
    }

    .description {
      color: #cccccc;
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .date {
      color: #888888;
      font-size: 0.875rem;
    }

    @media (max-width: 768px) {
      .card-image {
        height: 250px;
      }

      .title {
        font-size: 1.5rem;
      }
    }
  `]
})
export class BigCardComponent {
  @Input() article!: Article;
}
