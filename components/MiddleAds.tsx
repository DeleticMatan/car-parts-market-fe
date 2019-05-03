import * as React from 'react';
import Link from 'next/link';

type Props = {
  src?: string;
  link?: string;
};

const AdImage: React.FunctionComponent<Props> = ({ src, link }) => {
  if (src && link) {
    return (
      <a href={link} target="_blank">
        <div
          style={{
            marginBottom: '20px',
            border: '5px solid #CCCCCC',
            cursor: 'pointer',
          }}
        >
          <img
            style={{ width: '100%', maxWidth: '350px', height: 'auto' }}
            src={src}
          />
        </div>
      </a>
    );
  } else {
    return (
      <Link href="#">
        <div
          style={{
            marginBottom: '20px',
            border: '5px solid #CCCCCC',
            cursor: 'pointer',
          }}
        >
          <img
            style={{ width: '100%', maxWidth: '350px', height: 'auto' }}
            src="https://via.placeholder.com/320x75.png?text=Va%C5%A1a%20reklama%20ovde"
          />
        </div>
      </Link>
    );
  }
};

const MiddleAds = () => (
  <div className="middle-ads-wrapper">
    <AdImage
      link="https://patrimonsauto.rs/"
      src="/static/images/banners/patrimons.jpg"
    />
    <AdImage link="#" src="/static/images/banners/bmw-servis-radic.jpg" />
    <AdImage />
    <AdImage />
  </div>
);

export default MiddleAds;
