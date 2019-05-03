import * as React from 'react';

import { Carousel } from 'react-responsive-carousel';

import {
  FOLDER_ADS,
  FOLDER_RIMS,
  FOLDER_TIRES,
} from '../constants/general.constants';

type Props = {
  id?: any;
  adType?: any;
};

// @ts-ignore
const ImageSlider: React.FunctionComponent<Props> = ({ id, adType }: any) => {
  const [getErrors, setErrors] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const getFolder = () => {
    switch (adType) {
      case 'Ad': {
        return FOLDER_ADS;
      }
      case 'Tire': {
        return FOLDER_TIRES;
      }
      case 'Rim': {
        return FOLDER_RIMS;
      }
    }
  };

  const [getLinks, setLinks] = React.useState([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [getLoaded, setLoaded] = React.useState(0);

  return (
    <>
      {[1, 2, 3, 4, 5, 6].map(image => (
        <img
          key={image}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            display: 'none',
          }}
          onLoad={() => {
            setLoaded(getLoaded + 1);
            setLinks(
              getLinks.map((link, index) => {
                if (index + 1 === image) {
                  return `${
                    process.env.STATIC_IMAGE_SERVER_URI
                    }/${getFolder()}/${id}-${image}`;
                } else return link;
              }),
            );
          }}
          onError={e => {
            if (image === 1) {
              setLinks(
                getLinks.map((link, index) => {
                  if (index + 1 === image) {
                    return '/static/images/defaults/no-image.jpg';
                  } else return link;
                }),
              );
            }
            setLoaded(getLoaded + 1);
          }}
          src={`${
            process.env.STATIC_IMAGE_SERVER_URI
            }/${getFolder()}/${id}-${image}`}
        />
      ))}

      {getLoaded === 6 && (
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          {getLinks
            .filter(link => link && link)
            .map((link, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '100%',
                  minWidth: '100%',
                  backgroundColor: 'white',
                }}
              >
                <img
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    height: '100%',
                    width: 'auto',
                  }}
                  src={link}
                />
              </div>
            ))}
        </Carousel>
      )}
    </>
  );
};

export default ImageSlider;
