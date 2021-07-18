export class TextLog {
  public title: string;
  public body: string;
  public charAmt: number;
  public wordAmt: number;
  public totalAmt: number;
  public logId: number;
  public optionId: string;
  constructor(title: string, body: string, chars: number, words: number, total: number, logId: number, optionId: string) {
    this.title = title;
    this.body = body;
    this.charAmt = chars;
    this.wordAmt = words;
    this.totalAmt = total;
    this.logId = logId;
    this.optionId = optionId;
  }
}
