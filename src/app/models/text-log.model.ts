export class TextLog {
  public title: string;
  public body: string;
  public charAmt: number;
  public wordAmt: number;
  public totalAmt: number;
  public logId: number;
  constructor(title: string, body: string, chars: number, words: number, total: number, logId: number) {
    this.title = title;
    this.body = body;
    this.charAmt = chars;
    this.wordAmt = words;
    this.totalAmt = total;
    this.logId = logId;
  }
}
