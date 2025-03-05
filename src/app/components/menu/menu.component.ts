import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="menu-container">
      <div class="logo">
        <a routerLink="/">UFC Insider</a>
      </div>
      <div class="social-links">
        <a href="https://twitter.com/ufc" target="_blank" rel="noopener">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/ufc" target="_blank" rel="noopener">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/ufc" target="_blank" rel="noopener">
          <i class="fab fa-youtube"></i>
        </a>
      </div>
    </nav>
  `,
  styles: [`
    .menu-container {
      background-color: #111111;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .logo a {
      color: #ffffff;
      font-size: 1.5rem;
      font-weight: bold;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-links a {
      color: #ffffff;
      font-size: 1.2rem;
      transition: color 0.3s ease;
    }

    .social-links a:hover {
      color: #ff0000;
    }

    @media (max-width: 768px) {
      .menu-container {
        padding: 1rem;
      }

      .logo a {
        font-size: 1.2rem;
      }

      .social-links {
        gap: 0.5rem;
      }
    }
  `]
})
export class MenuComponent {} 