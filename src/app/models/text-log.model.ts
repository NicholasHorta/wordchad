export class TextLog {
  public title: string;
  public body: string;
  public charAmt: number;
  public wordAmt: number;
  constructor(title: string, body: string, chars: number, words: number) {
    this.title = title;
    this.body = body;
    this.charAmt = chars;
    this.wordAmt = words;
  }
}
