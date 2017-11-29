/**
 * @fixme Enable Webpack aliases to reduce relying on relative paths
 */
import * as U from 'karet.util';
import * as R from 'ramda';
import {
  format
} from 'date-fns';

// Datetime

export const mkDate = R.constructN(3, Date);
export const mkDateTime = R.constructN(6, Date);

// Presentation & layers

export const prefix = R.curry((pre, x) => U.join('', [pre, x]));

export const getAspectRatio =
  U.pipe(U.ifElse(U.isNil,
                  U.always('no-aspect-ratio'),
                  U.pipe(U.replace(':', '-'),
                         prefix('has-aspect-ratio aspect-'))));
