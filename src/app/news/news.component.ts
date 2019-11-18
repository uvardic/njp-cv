import {Component} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  posts = [
    new Post(1, 'Bravo ja', 'Krenuo sam da treniram'),
    new Post(2, 'Kolokvijum', 'Pohadjao kol iz skladista podataka bice pola ja se nadam'),
    new Post(3, 'Pakao', 'Zaboravio sam na ovaj projekat iz NJP-a pa danas moram da rintam ceo dan :)')
  ];
}

class Post {

  private readonly id: number;

  private readonly title: string;

  private readonly content: string;

  private likes: number;

  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.likes = 0;
    localStorage.setItem(String(this.id), String(this.likes));
  }

  public likePost() {
    this.likes = this.likes + 1;
    localStorage.setItem(String(this.id), String(this.likes));
  }

  public getTitle() {
    return this.title;
  }

  public getContent() {
    return this.content;
  }

  public getLikes() {
    return localStorage.getItem(String(this.id));
  }

}
