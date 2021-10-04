import styled from 'styled-components';

export const Wrapper = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  padding: ${props => props.padding};
`;

export const Marker = styled.img`
  width: 30px;
  position: absolute;
  bottom: 0;
  left: -12px;
`;
