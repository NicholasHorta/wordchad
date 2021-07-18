export class TextLog {
  public title: string;
  public body: string;
  public charAmt: number;
  public wordAmt: number;
  public totalAmt: number;
  public logId: number;
  public optionId: string;
  public colorCode: string;
  public logTime: string;
  constructor(title: string, body: string, chars: number, words: number, total: number, logId: number, optionId: string, colorCode: string, time: string) {
    this.title = title;
    this.body = body;
    this.charAmt = chars;
    this.wordAmt = words;
    this.totalAmt = total;
    this.logId = logId;
    this.optionId = optionId;
    this.colorCode = colorCode;
    this.logTime = time;
  }
}
