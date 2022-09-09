export class Post {
  content!: string;
  dateCreated: Date = new Date();

  constructor(content: string) {
    this.content = content;
  }
}
