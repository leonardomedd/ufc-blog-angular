import { Injectable, signal } from '@angular/core';
import { Article, mockArticles } from '../data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles = signal<Article[]>(mockArticles);

  constructor() { }

  getAllArticles(): Article[] {
    return this.articles();
  }

  getArticleById(id: number): Article | undefined {
    return this.articles().find(article => article.id === id);
  }

  getLatestArticles(count: number = 3): Article[] {
    return this.articles()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, count);
  }

  searchArticles(query: string): Article[] {
    query = query.toLowerCase();
    return this.articles().filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query)
    );
  }
} 