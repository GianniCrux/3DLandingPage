import styled, { keyframes } from 'styled-components'

export const Fade = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`

export const FadeIn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: #ffd863;
  animation: ${Fade} 4s normal forwards ease-in-out;
`

export const Container = styled.div`
  font-family: 'Inter';
  font-size: 16px;
  & h1 {
    padding: 0;
    margin: 0 0 0.05em 0;
    font-family: 'Ayer Poster', serif;
    font-weight: 400;
    font-size: max(12vw, 10em);
    line-height: 0.85em;
  }
`

export const TopLeft = styled.div`
  position: absolute;
  top: 5vw;
  left: 5vw;
  right: 5vw;
  z-index:10;
@media (max-width: 768px) {
    top: 3vw;
    left: 3vw;
    right: 3vw;
  }

  @media (max-width: 480px) {
    top: 2vw;
    left: 2vw;
    right: 2vw;
  }

  h1 {
    font-size: max(8vw, 2em);
    line-height: 0.85em;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: max(6vw, 1.5em);
    }

    @media (max-width: 480px) {
      font-size: max(5vw, 1.2em);
    }
  }
`

export const BottomLeft = styled.div`
  position: absolute;
  bottom: 5vw;
  left: 5vw;
  width: 30ch;
  max-width: 40%;
`

export const BottomRight = styled.div`
  position: absolute;
  bottom: 5vw;
  right: 5vw;
  width: 35ch;
  max-width: 40%;
  line-height: 1em;
  letter-spacing: -0.01em;
  text-align: right;
`

export const Hamburger = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 5vw;
  right: 5vw;
  & > div {
    position: relative;
    width: 24px;
    height: 2px;
    background: #252525;
    margin-bottom: 6px;
  }
  z-index: 11;
`

export const LeftMiddle = styled.div`
  position: absolute;
  bottom: 50%;
  right: 5vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 12px;
  transform: rotate(90deg) translate3d(50%, 0, 0);
  transform-origin: 100% 50%;
  z-index: 5;
`