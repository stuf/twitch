import { client } from 'tmi.js';
import * as U from 'karet.util';
import * as R from 'ramda';
import * as L from 'partial.lenses';

import { User } from './models';

const defaults = {};

// Twitch chat client

const mkClient = R.constructN(1, client);

export const getClient = options => {
  const client = mkClient(client);
};
