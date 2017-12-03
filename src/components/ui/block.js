import * as React from 'karet';
import * as U from 'karet.util';
import * as H from '../../shared/helpers';

const parseAlignment =
  U.ifElse(H.notNil,
           U.pipe(U.split(' '),
                  U.lift(U.show),
                  U.map(x => U.string`align-${x}`),
                  U.append('align')),
           U.always(undefined));

const ifPadChildren =
  U.ifElse(U.identity,
           U.always('pad-children'),
           U.always('pad-self'));

const Block = ({ className,
                 alignment,
                 children,
                 padChildren,
                 ...props }) =>
  <div className={U.cns('block',
                        ifPadChildren(padChildren),
                        parseAlignment(alignment),
                        className)}>
    {children}
  </div>;

export default Block;
