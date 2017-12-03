import * as t from 'tcomb';

export const MessageType =
  t.enums({ CLEAR: 'CLEAR',
            EMPTY: 'EMPTY',
            MESSAGE: 'MESSAGE',
            EVENT: 'EVENT' },
          'MessageType');

export const TickerMessage =
  t.struct({ title: t.maybe(t.String),
             body: t.maybe(t.String),
             duration: t.maybe(t.Number),
             type: MessageType },
           { name: 'TickerMessage',
             strict: true,
             defaultProps: {
               duration: 5000,
               type: MessageType('EMPTY')
             } });

//

export const PublishMessage =
  t.func([TickerMessage], t.Any, 'PublishMessage');

export const PublishMessages =
  t.func([t.list(TickerMessage)], t.Any, 'PublishMessages');
