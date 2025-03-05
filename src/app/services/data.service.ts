import { Injectable } from '@angular/core';

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  photoCover: string;
  author: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Conor McGregor: The Rise of a UFC Legend',
      description: 'A deep dive into Conor McGregor\'s journey in the UFC',
      photoCover: 'assets/mcgregor.jpg',
      author: 'UFC Insights',
      date: '2024-03-04'
    },
    {
      id: 2,
      title: 'UFC 300: What to Expect',
      description: 'Preview of the upcoming milestone UFC event',
      photoCover: 'assets/ufc300.jpg',
      author: 'Fight Analyst',
      date: '2024-03-05'
    }
  ];

  constructor() { }

  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getBlogPostById(id: number): BlogPost | undefined {
    return this.blogPosts.find(post => post.id === id);
  }
}