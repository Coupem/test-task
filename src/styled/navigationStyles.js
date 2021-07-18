import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const ButtonNavigation = styled(Button)({
  color: 'black',
  fontSize: 20,
  margin: '20px 5px',
  border: '1px solid #565656',
  '&:hover': {
    color: 'white',
    backgroundColor: '#565656',
  },
});
