import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import {IconButton, Stack, styled} from '@mui/material'

const TabsButton = styled(IconButton)(
  ({theme}) => `
      background-color:${theme.palette.mateBlack.dark};
      color:white;
      svg{
        font-size:20px;
      }
      &.Mui-disabled{
        background-color:${theme.palette.mateBlack.dark};
        color:white;
        opacity:.5;
      }
      &:hover{
          background-color:${theme.palette.mateBlack.main};
      }
      &.left{
          background-color:${theme.palette.secondary.main};
          color:black;
          &.Mui-disabled{
            opacity:.5;
          }
      }
  `
)
const TabsScrollButtons = ({handleScrollButtonClick, styles, scrollButtonsDisabled}) => {
  const scrollIcons = {
    left: <ChevronLeftIcon />,
    right: <ChevronRightIcon />,
  }
  const classes = styles ?? {}
  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="end" sx={{...classes}}>
      {Object.entries(scrollIcons).map(([direction, icon], i) => (
        <TabsButton
          disabled={
            scrollButtonsDisabled ? (scrollButtonsDisabled[direction] ? true : false) : false
          }
          key={i}
          className={direction}
          size="small"
          onClick={() => (handleScrollButtonClick ? handleScrollButtonClick(direction) : {})}
        >
          {icon}
        </TabsButton>
      ))}
    </Stack>
  )
}

export default TabsScrollButtons
