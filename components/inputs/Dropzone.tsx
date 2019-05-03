import * as React from 'react';
import { useDropzone } from 'react-dropzone';

import { Button } from 'reactstrap';

import {
  FOLDER_ADS,
  FOLDER_RIMS,
  FOLDER_TIRES,
} from '../../constants/general.constants';

// @ts-ignore
const Dropzone = ({
  getImage,
  setImage,
  original,
  id,
  type,
  number,
  onOriginal,
}: any) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/jpg, image/png',
    onDrop: acceptedFiles => {
      if (
        acceptedFiles[0] &&
        acceptedFiles[0].size &&
        acceptedFiles[0].size < 2000000
      ) {
        setImage(
          Object.assign(acceptedFiles[0], {
            preview: URL.createObjectURL(acceptedFiles[0]),
          }),
        );
      } else {
        alert(
          'Fotografije moraju zauzimati ispod 2mb prostora i biti u PNG, JPG ili JPEG formatu.',
        );
      }
    },
  });

  const [getOriginal, setOriginal] = React.useState(false);

  const getFolder = () => {
    switch (type) {
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

  const onSetOriginal = (original: any) => {
    setOriginal(true);
    onOriginal(true);
  };

  const [getTest, setTest] = React.useState(true);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '10px',
        margin: '10px',
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: '1px',
        minWidth: '150px',
        minHeight: '150px',
      }}
    >
      {getTest && (
        <img
          style={{
            display: 'none',
          }}
          onLoad={() => {
            onSetOriginal(true);
          }}
          onError={() => {
            setOriginal(false);
          }}
          src={`${
            process.env.STATIC_IMAGE_SERVER_URI
          }/${getFolder()}/${id}-${number + 1}`}
        />
      )}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {getOriginal || getImage ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            {getOriginal ? (
              <img
                style={{
                  maxWidth: '125px',
                  maxHeight: '125px',
                  cursor: 'pointer',
                }}
                src={`${
                  process.env.STATIC_IMAGE_SERVER_URI
                }/${getFolder()}/${id}-${number + 1}`}
              />
            ) : (
              <img
                style={{
                  maxWidth: '125px',
                  maxHeight: '125px',
                  cursor: 'pointer',
                }}
                src={getImage.preview}
              />
            )}
          </div>
        ) : (
          <img
            onClick={(e: any) => e.preventDefault()}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              cursor: 'pointer',
            }}
            src="/static/images/defaults/no-image.jpg"
          />
        )}
      </div>

      {(getOriginal || getImage) && (
        <div style={{ paddingTop: '10px' }}>
          <Button
            onClick={() => {
              setTest(false);
              setOriginal(false);
              setImage(null);
            }}
            color="warning"
            size="sm"
          >
            Obriši
          </Button>
        </div>
      )}
    </div>
  );
};

export default Dropzone;
