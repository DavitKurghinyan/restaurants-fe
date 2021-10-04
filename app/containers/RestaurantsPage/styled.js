import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 100vh;
`;

export const ListWrapper = styled.div`
  max-height: calc(100vh - 40px);
  padding: 40px;
  overflow-y: scroll;

  /* width */

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  /* Track */

  ::-webkit-scrollbar-track {
    background: #f2f2f2;
  }

  /* Handle */

  ::-webkit-scrollbar-thumb {
    background: #c4c4c4;
  }

  /* Handle on hover */

  ::-webkit-scrollbar-thumb:hover {
    background: #c4c4c4;
  }
`;
