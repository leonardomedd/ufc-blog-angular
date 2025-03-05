import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../data/mock-data';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink, DatePipe],
  template: `
    <article class="small-card">
      <img [src]="article.photoCover" [alt]="article.title" class="card-image">
      <div class="card-content">
        <span class="category">{{ article.category }}</span>
        <h3 class="title">
          <a [routerLink]="['/content', article.id]">{{ article.title }}</a>
        </h3>
        <span class="date">{{ article.date | date:'dd/MM/yyyy' }}</span>
      </div>
    </article>
  `,
  styles: [`
    .small-card {
      background-color: #1a1a1a;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.3s ease;
      width: 100%;
    }

    .small-card:hover {
      transform: translateY(-5px);
    }

    .card-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .card-content {
      padding: 1rem;
    }

    .category {
      background-color: #ff0000;
      color: white;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
      text-transform: uppercase;
    }

    .title {
      margin: 0.75rem 0;
      font-size: 1.25rem;
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

    .date {
      color: #888888;
      font-size: 0.75rem;
    }

    @media (max-width: 768px) {
      .card-image {
        height: 150px;
      }

      .title {
        font-size: 1rem;
      }
    }
  `]
})
export class SmallCardComponent {
  @Input() article!: Article;
}
