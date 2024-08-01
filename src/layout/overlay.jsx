import { Container, TopLeft, BottomLeft, BottomRight, Hamburger } from './styles'

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>
          LEMONS
          <br />
          FOR YOU LEMONADES —
        </h1>
        <p>With a bit of blender</p>
      </TopLeft>
      <BottomLeft>
        A revisitation of <a href="https://playful.software">playful.software</a> and <a href="https://bananas.vercel.app/">Bananas</a> 
      </BottomLeft>
      <BottomRight>
        Get inspired by other |
        <br />
        Navigates on the web |
        <br />
        Learn from others |
        <br />
        Apply your ideas |
        <br />
        Discover |
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