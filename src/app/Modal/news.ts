export interface INews {
  author?: string;
  content: string;
  description?: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage?: string;
  source?: INewsSource;
}

export interface INewsSource {
  id?: any;
  name?: string;
}

export interface INewsCategory{
  id: string;
  value: string;
}