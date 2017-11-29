import * as React from 'karet';
import * as U from 'karet.util';
import BaseBlock from './BaseBlock';
import './BlockList.css';

const BASENAME = 'BlockList';

const BlockList = ({ children, className, ...props }) =>
  <BaseBlock {...{ className: U.cns(BASENAME, className),
                   ...props }}>
    {children}
  </BaseBlock>;

export default BlockList;
