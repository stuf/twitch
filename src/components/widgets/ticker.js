import * as React from 'karet';
import * as R from 'ramda';
import * as U from 'karet.util';
import * as Kefir from 'kefir';
import * as H from '../../shared/helpers';
import uuid from 'uuid/v4';

const intoDelayed = msg => H.delayedConstant(msg.duration, msg);

const prefixStart = obsFirst => obs => {
  return obsFirst.concat(obs);
};

const suffixStr = U.curry((suf, str) => U.string`${suf}-${str}`);

// const elCns = (baseName, duration, enter = 0.7, exit = 0.7) =>
//   Kefir.constant(baseName)
//        .concat([Kefir.constant(`${baseName}-entering`),
//                 Kefir.constant(`${baseName}-enter`),
//                 Kefir.later(enter * 1000, `${baseName}-entered`),
//                 Kefir.later(duration, `${baseName}-exiting`),
//                 Kefir.later(exit * 1000, `${baseName}-exit`)]);

const quickToggle = name =>
  U.seq(H.toConstant(name),
        U.flatMapLatest(v => Kefir.later(5, '')),
        U.flatMapLatest(v => Kefir.constant(name)))

const TickerMessage = ({
  type,
  title,
  body,
  duration,
  className,
  messageId = uuid(),
  progress = U.variable(),
  restartAnimation = H.quickToggle('animate'),
  rootEl = U.variable()
}) => {
  const chain = U.flatMapLatest;
  const mkEvent$ = ev => el => Kefir.fromEvents(el, ev);

  const onStart = chain(mkEvent$('animationstart'), rootEl);
  const onEnd = chain(mkEvent$('animationend'), rootEl);

  onStart.log('onStart');
  onEnd.log('onEnd');

  return (
    <div className={U.cns(className, 'ticker-message', restartAnimation)}
        ref={U.refTo(rootEl)}
        data-message-id={messageId}>
      <div className="ticker-message-body">
        <p className="title">
          {title}
        </p>
        <p><small>Duration: {duration} ms</small></p>
        {U.ift(H.notNil(body),
              <p>{body}</p>)}
        <svg className="ticker-progress-bar">
          <rect ref={U.refTo(progress)} x="0"
                y="0"
                width="100%"
                height="5"
                fill="#00A388"
                style={{ animationDuration: U.string`${duration / 1000}s` }} />
        </svg>
      </div>
    </div>
  );
}

const Ticker = ({ className, messages, ...props }) =>
  <div className={U.cns(className, 'ticker')}>
    {U.seq(messages,
           U.skipUnless(U.identity),
           U.flatMapSerial(intoDelayed),
           U.mapValue(ps =>
             <div data-msg-type={ps.type}>
               <TickerMessage {...ps} />
             </div>))}
  </div>;

export default Ticker;
