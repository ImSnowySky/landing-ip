import styled from 'styled-components';

export const ContainerBlock = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: ${({ fullHeight = false, screenHeight }) => fullHeight ? `${screenHeight}px` : 'auto'};
  padding: ${({ fullWidth = false }) => fullWidth ? 0 : '0 72px'};
  margin: 0 auto;
  box-sizing: border-box;
  background-color: ${({ bgColor = 'transparent' }) => bgColor};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;