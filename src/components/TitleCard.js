import * as React from 'karet';
import * as U from 'karet.util';

import './TitleCard.css';

const TitleCard = ({ title, subTitle, align }) =>
  <article className={U.cns('TitleCard', 'align', 'align-bottom', 'align-right')}>
    <header>
      <h1>{title}</h1>
      {U.ift(subTitle,
             <h2>{subTitle}</h2>)}
    </header>
  </article>;

export default TitleCard;
