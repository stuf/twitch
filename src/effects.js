import * as U from 'karet.util';

export const tickerMessagesBus = U.bus();

export const tickerMessages = U.template(tickerMessagesBus).log('tickerMessages');

if (process.env.NODE_ENV === 'development') {
  Object.assign(window, { effects: { tickerMessages } })
}
