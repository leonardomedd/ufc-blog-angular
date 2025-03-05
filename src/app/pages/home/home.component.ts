import { Component, OnInit } from '@angular/core';
import { Article } from '../../data/mock-data';
import { ArticleService } from '../../services/article.service';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCardComponent, SmallCardComponent, MenuComponent],
  template: `
    <div class="home-container">
      <app-menu />
      
      <main class="content">
        <section class="featured-article">
          <app-big-card [article]="featuredArticle" />
        </section>

        <section class="latest-articles">
          <h2>Últimas Notícias</h2>
          <div class="articles-grid">
            @for (article of latestArticles; track article.id) {
              <app-small-card [article]="article" />
            }
          </div>
        </section>
      </main>
    </div>
  `,
  styles: [`
    .home-container {
      min-height: 100vh;
      background-color: #000000;
      color: #ffffff;
    }

    .content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .featured-article {
      margin-bottom: 3rem;
    }

    .latest-articles h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-left: 4px solid #ff0000;
      padding-left: 1rem;
    }

    .articles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }

    @media (max-width: 768px) {
      .content {
        padding: 1rem;
      }

      .latest-articles h2 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
      }

      .articles-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  featuredArticle!: Article;
  latestArticles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    const allArticles = this.articleService.getAllArticles();
    this.featuredArticle = allArticles[0];
    this.latestArticles = allArticles.slice(1, 4);
  }
}