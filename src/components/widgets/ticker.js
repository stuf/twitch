import * as React from 'karet';
import * as U from 'karet.util';
import * as H from '../../shared/helpers';

const Ticker = ({ className, messages, ...props }) =>
  <div className={U.cns(className, 'ticker')}>
    <h1>Ticker dicker</h1>
    {U.seq(messages,
           U.skipUnless(U.identity),
           U.flatMapSerial(msg => {
             if (msg.type === 'message') {
               console.log('msg was a message');
             }
             else if (msg.type === 'empty') {
               console.log('should clear the ticker');
             }
             return H.delayedConstant(msg.duration || 1000, msg);
           }),
           U.toString)}
  </div>;

export default Ticker;
