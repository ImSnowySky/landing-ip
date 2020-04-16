import styled from 'styled-components';

const BaseBlock = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  outline: none !important;
  text-decoration: none !important;
`;

export const CardContainer = styled(BaseBlock)`
  height: ${({ fullHeight }) => fullHeight ? '100%' : null};
  background: ${({ background = '#fff' }) => background};
  box-shadow: ${({ withShadow = false }) => withShadow ? '2px 2px 10px rgba(0, 0, 0, 0.2)' : null};
  border-radius: 8px;
  transition: box-shadow 0.2s ease-in-out, top 0.2s ease-in-out;
`;

export const CardInnerContainer = styled(BaseBlock)`
  margin: 24px 32px;
  height: 100%;
  width: calc(100% - 64px);

  @media (max-width: 375px) {
    margin: 24px 16px;
    width: calc(100% - 32px);
  }
`;
