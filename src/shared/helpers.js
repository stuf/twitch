/**
 * @fixme Enable Webpack aliases to reduce relying on relative paths
 */
import * as U from 'karet.util';
import * as R from 'ramda';
import {
  stream,
  later,
  constant,
  Observable
} from 'kefir';
import {
  format
} from 'date-fns';

// Complementary helpers

export const notNil = U.complement(U.isNil);
export const notEmpty = U.complement(U.isEmpty);

// Kefir

export const toConstant = x => x instanceof Observable ? x : constant(x);

export const delayedConstant =
  (delay, value) =>
    stream(emitter => {
      emitter.emit(value);
      setTimeout(() => {
        emitter.end();
      }, delay);
    });

// Datetime

export const mkDate = R.constructN(3, Date);
export const mkDateTime = R.constructN(6, Date);

// Animate

export const quickToggle = name =>
  U.seq(toConstant(name),
        U.flatMapLatest(v => later(5, '')),
        U.flatMapLatest(v => constant(name)))



// Presentation & layers

export const prefix = R.curry((pre, x) => U.join('', [pre, x]));

export const getAspectRatio =
  U.pipe(U.ifElse(U.isNil,
                  U.always('no-aspect-ratio'),
                  U.pipe(U.replace(':', '-'),
                         prefix('has-aspect-ratio aspect-'))));

// Programming

const itemDateFormat = 'HH:mm';

export const asTime = U.lift1Shallow(x => format(x, itemDateFormat));
export const formatIsoTime = U.lift1Shallow(d => d.toISOString());
