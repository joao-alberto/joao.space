import { styled } from "theme";

const Wrapper = styled("div", {
  padding: "$2 $4",
});

function Menu() {
  return (
    <Wrapper>
      <nav>Menu</nav>
    </Wrapper>
  );
}

export default Menu;
