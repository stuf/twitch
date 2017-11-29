import * as React from 'karet';
import * as U from 'karet.util';

import BaseBlock from './BaseBlock';

import './BlockList.css';

const BlockList = ({ align, children }) =>
  <BaseBlock {...{ align }}>
    {children}
  </BaseBlock>;

export default BlockList;
