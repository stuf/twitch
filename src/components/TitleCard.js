import * as React from 'karet';
import * as U from 'karet.util';

import './TitleCard.css';
import BaseBlock from './BaseBlock';

const TitleCard = ({ title, subTitle, align }) =>
  <BaseBlock {...{ align }}>
    <header>
      <h1>{title}</h1>
      {U.ift(subTitle,
           <h2>{subTitle}</h2>)}
    </header>
  </BaseBlock>;

/*
  <article className={U.cns('TitleCard', 'align', 'align-bottom', 'align-right')}>
  </article>
*/

export default TitleCard;
