import * as t from 'tcomb';

export const MessageType =
  t.enums({
    CLEAR: 'CLEAR',
    EMPTY: 'EMPTY',
    MESSAGE: 'MESSAGE'
  }, 'MessageType');

export const TickerMessage =
  t.struct({ title: t.String,
             body: t.maybe(t.String),
             duration: t.maybe(t.Number),
             type: MessageType },
           { name: 'TickerMessage',
             strict: true,
             defaultProps: {
               duration: 5000
             } })

export const PublishMessage =
  t.func([TickerMessage], t.Any);
