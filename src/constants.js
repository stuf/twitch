import { MessageType } from './shared/models';

export const MessageKind = {
  MESSAGE: MessageType('MESSAGE'),
  EMPTY: MessageType('EMPTY'),
  CLEAR: MessageType('CLEAR')
};
