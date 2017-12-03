import * as React from 'karet';
import * as U from 'karet.util';
import * as Kefir from 'kefir';
import * as H from '../../shared/helpers';

const intoDelayed = msg => H.delayedConstant(msg.duration, msg);

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
  progress = U.variable(),
  restartAnimation = H.quickToggle('animate')
}) =>
  <div className={U.cns(className, 'ticker-message', restartAnimation)}>
    <p className="title">
      {title}
    </p>
    {U.ift(H.notNil(body),
           <p>{body}</p>)}
    <svg>
      <rect ref={U.refTo(progress)} x="0"
            y="0"
            width="100%"
            height="5"
            fill="#00A388"
            style={{ animationDuration: U.string`${duration / 1000}s` }} />
    </svg>
  </div>

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
