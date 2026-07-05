import { IMessageSender } from './imessage-sender.interface';

export class EmailMessageSender implements IMessageSender {
  public SendMessage(Message: string): string {
    return "'" + Message + "'   : This Message has been sent using Email";
  }
}
