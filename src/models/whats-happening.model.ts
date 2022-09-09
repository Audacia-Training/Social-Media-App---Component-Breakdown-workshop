export class WhatsHappening {
  title!: string;
  mainContent!: string;
  amountOfPosts!: number;
  photo!: string;

  constructor(title: string, mainContent: string, amountOfPosts: number) {
    this.title = title;
    this.mainContent = mainContent;
    this.amountOfPosts = amountOfPosts;
  }
}
