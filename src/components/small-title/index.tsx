import { styled } from "theme";
import Title from "components/title";

type SmallTitle = {
  children: string;
  overline?: boolean;
  as?: React.ComponentType;
};

const SmallTitleStyled = styled(Title, {
  fontSize: "$6",
  position: "relative",
  zIndex: 0,

  variants: {
    variant: {
      overline: {
        "&:before": {
          content: "",
          position: "absolute",
          width: "120px",
          height: "16px",
          background: "$primary",
          zIndex: -1,
          top: "-5px",
          borderRadius: "2px",
        },
      },
    },
  },
});

const SmallTitle = ({ children, as = "p", overline = false }) => {
  const props = overline ? { variant: "overline" } : {};

  return (
    <SmallTitleStyled as={as} {...props}>
      {children}
    </SmallTitleStyled>
  );
};

export default SmallTitle;
