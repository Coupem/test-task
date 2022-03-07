import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  mainLayout: {
    backgroundColor: 'white',
    height: '100%',
    fontFamily: 'monospace',
    paddingBottom: 100,
  },
  navButton: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  mainContent: {
    height: '100%',
  },
}));
