import * as t from 'tcomb';

export const Block =
  t.struct({ id: t.String },
           { name: 'Block', strict: true })
