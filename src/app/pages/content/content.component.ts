import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../data/mock-data';
import { ArticleService } from '../../services/article.service';
import { MenuComponent } from '../../components/menu/menu.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MenuComponent, DatePipe],
  template: `
    <div class="content-container">
      <app-menu />
      
      @if (article) {
        <main class="article-content">
          <img [src]="article.photoCover" [alt]="article.title" class="article-image">
          
          <div class="article-header">
            <span class="category">{{ article.category }}</span>
            <h1 class="title">{{ article.title }}</h1>
            <span class="date">{{ article.date | date:'dd/MM/yyyy' }}</span>
          </div>

          <div class="article-body">
            <p>{{ article.content }}</p>
          </div>

          <button class="back-button" (click)="goBack()">Voltar</button>
        </main>
      } @else {
        <div class="error-message">
          <h2>Artigo não encontrado</h2>
          <button class="back-button" (click)="goBack()">Voltar para Home</button>
        </div>
      }
    </div>
  `,
  styles: [`
    .content-container {
      min-height: 100vh;
      background-color: #000000;
      color: #ffffff;
    }

    .article-content {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .article-image {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 2rem;
    }

    .article-header {
      margin-bottom: 2rem;
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
      font-size: 2.5rem;
      margin: 1rem 0;
      line-height: 1.2;
    }

    .date {
      color: #888888;
      font-size: 0.875rem;
    }

    .article-body {
      font-size: 1.125rem;
      line-height: 1.8;
      color: #cccccc;
      margin-bottom: 2rem;
    }

    .back-button {
      background-color: #ff0000;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .back-button:hover {
      background-color: #cc0000;
    }

    .error-message {
      text-align: center;
      padding: 4rem 1rem;
    }

    .error-message h2 {
      margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
      .article-image {
        height: 250px;
      }

      .title {
        font-size: 2rem;
      }

      .article-body {
        font-size: 1rem;
      }
    }
  `]
})
export class ContentComponent implements OnInit {
  article: Article | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.article = this.articleService.getArticleById(id);
      if (!this.article) {
        this.router.navigate(['/']);
      }
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
