export class Response<T> {
  statusCode: number;
  message: string;
  data: T;

  constructor() {
    this.statusCode = 200;
    this.message = 'success';
  }
}
