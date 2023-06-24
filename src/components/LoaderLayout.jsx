import {Box, styled} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import {useSelector} from 'react-redux'

const Loader = styled(Box)(
  ({theme}) => `
  width:100%;
  height: calc(100vh - 64px);
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:${theme.spacing(2)};
  img{
	transform: scale(1);
	animation: pulse 2s infinite;
  }
  @keyframes pulse {
	0% {
		transform: scale(0.95);
	}

	70% {
		transform: scale(1);
	}

	100% {
		transform: scale(0.95);
	}
  }
`
)
const LoaderLayout = ({children}) => {
  const isLoading = useSelector((state) => state.isLoading)
  return (
    <>
      {isLoading ? (
        <Loader>
          <CircularProgress />
          <Box component="img" src="assets/images/logo-text.png" alt="" sx={{animation: 'wave'}} />
        </Loader>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

export default LoaderLayout
