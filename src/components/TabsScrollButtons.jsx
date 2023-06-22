import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IconButton, Stack, styled } from "@mui/material";

const TabsButton = styled(IconButton)(
  ({ theme }) => `
      background-color:${theme.palette.mateBlack.dark};
      color:white;
      svg{
        font-size:20px;
      }
      &:hover{
          background-color:${theme.palette.mateBlack.main};
      }
      &.left{
          background-color:${theme.palette.secondary.main};
          color:black;
      }
  `
);
const TabsScrollButtons = ({ handleScrollButtonClick, styles }) => {
  const scrollIcons = {
    left: <ChevronLeftIcon />,
    right: <ChevronRightIcon />,
  };
  const classes = styles ?? {};
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="end"
      sx={{ ...classes }}
    >
      {Object.entries(scrollIcons).map(([direction, icon], i) => (
        <TabsButton
          key={i}
          className={direction}
          size="small"
          onClick={() =>
            handleScrollButtonClick ? handleScrollButtonClick(direction) : {}
          }
        >
          {icon}
        </TabsButton>
      ))}
    </Stack>
  );
};

export default TabsScrollButtons;
