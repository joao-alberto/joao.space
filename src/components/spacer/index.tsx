import { styled } from "theme";

type SpacerProps = {
  size: number;
  axis?: "horizontal" | "vertical";
};

function getHeight({ axis, size }) {
  return axis === "horizontal" ? 1 : size;
}

function getWidth({ axis, size }) {
  return axis === "vertical" ? 1 : size;
}

const Component = styled("span", {
  display: "block",
});

function Spacer({ size, axis = "horizontal" }: SpacerProps) {
  const width = getWidth({ size, axis });
  const height = getHeight({ size, axis });

  return (
    <Component
      css={{
        width,
        height,
        minWidth: width,
        minHeight: height,
      }}
    />
  );
}

export default Spacer;
