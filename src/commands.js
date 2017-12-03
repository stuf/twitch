import { MessageKind } from './constants';
import { tickerMessagesBus } from './effects';
import { PublishMessage } from './shared/models';

export const publishMessage =
  PublishMessage.of(msg => tickerMessagesBus.push(msg));

export const pushMessage = msg =>
  publishMessage({ ...msg, type: MessageKind.MESSAGE })

export const clearTicker = () =>
  publishMessage({ type: MessageKind.CLEAR })
