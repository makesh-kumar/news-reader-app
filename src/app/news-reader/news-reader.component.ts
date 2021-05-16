import { Component, OnInit } from '@angular/core';
import { INews, INewsCategory } from '../Modal/news';
import { ApiService } from '../Services/api.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-new-reader',
  templateUrl: './news-reader.component.html',
  styleUrls: ['./news-reader.component.less'],
})
export class NewReaderComponent implements OnInit {
  public news: INews[];
  public newsType: string;
  public newsCategory: INewsCategory[];
  constructor(private apiService: ApiService, private toastr: ToastrService) {}

  ngOnInit() {
    this.newsCategory = [];
    this.newsCategory.push(
      { id: 'all', value: 'All' },
      { id: 'business', value: 'Business' },
      { id: 'technology', value: 'Technology' },
      { id: 'sports', value: 'Sports' },
      { id: 'health', value: 'Health' },
      { id: 'entertainment', value: 'Entertainment' }
    );
    this.getNews();
  }

  getNews(): void {
    this.apiService.getNews().subscribe(
      (response: any) => {
        this.news = response.articles;
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('Please try again !', 'Error Occurred!');
      }
    );
  }

  getNewsOf(type: string) {
    if (type === 'all') {
      this.getNews();
      return;
    }
    this.apiService.getNewsOf(type).subscribe(
      (response: any) => {
        this.news = response.articles;
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('Please try again !', 'Error Occurred!');
      }
    );
  }
}
