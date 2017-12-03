import { MessageKind } from './constants';
import { tickerMessagesBus } from './effects';
import { PublishMessage, PublishMessages } from './shared/models';

export const publishMessage =
  PublishMessage.of(msg => {
    console.log('Publish message', msg);
    tickerMessagesBus.push(msg);
  });

export const publishMessages =
  PublishMessages.of(msgs => {
    console.log(`Publishing message batch of ${msgs.length} messages.`, msgs);
    msgs.forEach(msg => tickerMessagesBus.push(msg));
  })

export const pushMessage = msg =>
  publishMessage({ ...msg, type: MessageKind.MESSAGE })

export const clearTicker = () =>
  publishMessage({ type: MessageKind.CLEAR })
