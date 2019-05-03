import * as React from 'react';
import Link from 'next/link';

import './NavigationItem.scss';

type Props = {
  title: string;
  link: string;
  light?: boolean;
  prefetch?: boolean;
  onClick?: any;
};

const NavigationItem: React.FunctionComponent<Props> = ({
  title,
  link,
  light,
  onClick = false,
}) => (
    !onClick ?
      <Link href={link}>
        <a className={light ? 'navlink-text navlink-text-light' : 'navlink-text'}>
          {title}
        </a>
      </Link> : <div className='navlink-text-light' onClick={onClick}>
        <a className={light ? 'navlink-text navlink-text-light' : 'navlink-text'}>
          {title}
        </a>
      </div>
  );

export default NavigationItem;
