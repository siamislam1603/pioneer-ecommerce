import {Container, Typography, styled} from '@mui/material'

export const ScrollableContainer = styled(Container)(
  ({theme, width}) => `
    margin-right:0;
    ${theme.breakpoints.up('sm')}{
        padding-right:0;
    }
    ${theme.breakpoints.up('xl')}{
        max-width: calc(1536px + ${width}px);
    }
`
)
export const LineClamp = styled(Typography)(
  ({line}) => `
    overflow: hidden;
    textOverflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
`
)
