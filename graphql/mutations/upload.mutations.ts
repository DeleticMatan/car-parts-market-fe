import gql from 'graphql-tag';

export const UploadFile = gql`
  mutation uploadFile($file: Upload!, $id: ID!, $type: String!) {
    uploadFile(file: $file, id: $id, type: $type)
  }
`;

export const DeleteFile = gql`
  mutation deleteFile($id: String!) {
    deleteFile(id: $id)
  }
`;
