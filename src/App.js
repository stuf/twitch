import * as React from 'karet';
import * as t from 'tcomb';
import * as U from 'karet.util';
import * as R from 'ramda';
import * as L from 'partial.lenses';
import * as Kefir from 'kefir';
import uuid from 'uuid/v4';

import './app.css';

import * as H from './shared/helpers';
import Block from './components/ui/block';
import Clock from './components/widgets/clock';
import Ticker from './components/widgets/ticker';

import * as constants from './constants';
import * as effects from './effects';
import * as commands from './commands';
import * as models from './shared/models';

const { MessageKind } = constants;
const { TickerMessage, MessageType } = models;

// Object.assign(window, { R, U, L, t, uuid, app: { constants, effects, commands, models } });

const initialMessages =
  [TickerMessage({ title: uuid(),
                   body: 'Should take a couple of seconds',
                   duration: 4000,
                   type: MessageKind.MESSAGE }),
   TickerMessage({ title: uuid(),
                   body: 'Should also take four seconds',
                   duration: 4000,
                   type: MessageKind.MESSAGE }),
   TickerMessage({ title: uuid(),
                   body: 'Forever in silver',
                   duration: 6000,
                   type: MessageKind.EVENT }),
   TickerMessage({ type: MessageKind.CLEAR })];

const initializeMessages = () => initialMessages.forEach(commands.pushMessage);

//

const App = ({ aspectRatio, dom = U.variable() }) =>
  <section className={U.cns('app-block', H.getAspectRatio(aspectRatio))}>
    <section className="safe"
             ref={U.refTo(dom)}>
      <Clock />

      <Block padChildren
             alignment="bottom right">
        <Ticker messages={effects.tickerMessages} />
      </Block>

      {/* Initialize the message queue with some dummy data */}
      {U.sink(U.seq(Kefir.later(1000, null),
                    U.on({ value: initializeMessages })))}
    </section>
  </section>;

export default App;
