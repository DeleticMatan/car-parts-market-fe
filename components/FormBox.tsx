import * as React from 'react';

type Props = {
  title?: string;
  children?: any;
};

const FormBox: React.FunctionComponent<Props> = ({ title, children }) => (
  <div className="search-box">
    {title && (
      <>
        <div className="row">
          <h1 style={{ marginBottom: '0px' }}>{title}</h1>
        </div>
        <hr />{' '}
      </>
    )}
    {children}
  </div>
);

export default FormBox;
