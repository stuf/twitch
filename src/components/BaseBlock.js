import * as React from 'karet';
import * as U from 'karet.util';

import './BaseBlock.css';

const baseCns = 'BaseBlock';

const Block = ({ children, align }) =>
  <section className={U.cns(baseCns)}>
    {children}
  </section>;

export default Block;
