import * as React from 'karet';
import * as U from 'karet.util';

import './TitleCard.css';
import BaseBlock from './BaseBlock';

const BASENAME = 'TitleCard';

const TitleCard = ({ title, subTitle, ...props }) =>
  <BaseBlock {...{ ...props,
                   className: U.cns(BASENAME, props.className) }}>
    <header>
      <p className="main">{title}</p>
      {U.ift(subTitle,
           <p className="sub">{subTitle}</p>)}
    </header>
  </BaseBlock>;

export default TitleCard;
