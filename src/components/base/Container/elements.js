import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify = 'flex-start' }) => justify};
  width: ${({ fullWidth = false, width }) => fullWidth ? `${width}px` : '1280px'};
  min-height: ${({ fullHeight = false, height }) => fullHeight ? `${height}px` : 'auto'};
  padding: ${({ fullWidth = false }) => fullWidth ? 0 : '0 72px'};
  margin: 0 auto;
  box-sizing: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;