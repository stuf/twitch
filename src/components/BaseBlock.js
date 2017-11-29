import * as React from 'karet';
import * as U from 'karet.util';

import './BaseBlock.css';

const BASENAME = 'BaseBlock';

//

const getAlignment = x => U.string`align-${x}`;

const getAlignments =
  U.pipe(U.when(U.test(/-/), U.split('-')),
         U.when(U.test(/\s/), U.split(' ')),
         U.unless(U.is(Array), U.of),
         U.map(getAlignment),
         U.append('align'));

const Block = ({
  children,
  className,
  align,
  unstyled = false,

  _alignments = U.ift(align, getAlignments(align))
}) =>
  <section className={U.cns(BASENAME, U.ifte(unstyled, 'plain', 'styled'), className, _alignments)}>
    {children}
  </section>;

export default Block;
