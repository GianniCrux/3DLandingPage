import { Container, TopLeft, BottomLeft, BottomRight, Hamburger } from './styles'

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>
        — 
          LEMONS
          <br />
          FOR YOUR LEMONADES  —
        </h1>
      </TopLeft>
      <BottomLeft>
        <p>With a bit of blender,</p>
        A revisitation of <a target='_blank' href="https://playful.software">playful.software</a> and <a target='_blank' href="https://bananas.vercel.app/">Bananas</a> 
      </BottomLeft>
      <BottomRight>
        Get inspired by other |
        <br />
        Navigates on the web |
        <br />
        Learn from the web |
        <br />
        Discover |
        <br />
        Develop your ideas |
        <br />
        Animate |
        <br />
        Make a positive impact |
        <br />
        Find yourself better! |
        <br />
      </BottomRight>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
    </Container>
  )
}