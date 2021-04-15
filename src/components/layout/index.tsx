import { styled } from "theme";

const Wrapper = styled("div", {
  background: "$black",
  minHeight: "100vh",
});

const Container = styled("div", {
  maxWidth: "1240px",
  margin: "0 auto",
  padding: "$3",
});

function Layout({ children }) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}

export default Layout;
