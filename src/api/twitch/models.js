import * as t from 'tcomb';

export const User =
  t.struct({ id: t.String,
             name: t.String,
             username: t.String })
