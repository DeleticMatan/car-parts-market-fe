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
            style={{
              width: '100%',
              maxWidth: '350px',
              height: 'auto',
            }}
            src="https://via.placeholder.com/300x150.png?text=Va%C5%A1a%20reklama%20ovde"
          />
        </div>
      </Link>
    );
  }
};

const RightAds = () => (
  <div className="right-ads-wrapper">
    <AdImage />
    <AdImage
      link="http://prodajaturbina.rs"
      src="/static/images/banners/banergreenteam300x150.png"
    />
    <AdImage />
    <AdImage link="https://eho.rs" src="/static/images/banners/ehobaner.png" />
    <AdImage
      link="http://tematikawebstudio.com"
      src="/static/images/banners/tematikawebstudio.jpg"
    />
    <AdImage
      link="https://aplikacijeisajtovi.com"
      src="/static/images/banners/appisajtovibaner.jpg"
    />
    <AdImage />
    <AdImage />
    <AdImage />
    <AdImage />
  </div>
);

export default RightAds;
