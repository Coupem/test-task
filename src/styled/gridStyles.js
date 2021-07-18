import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  image: {
    width: 200,
    height: 100,
  },
  themeTable: {
    '& thead': {
      '& tr': {
        backgroundColor: '#727272',
        '& th': {
          fontSize: 23,
          padding: '20px 0',
          color: 'white',
          margin: 'auto',
        },
      },
    },
    '& table': {
      '& tr': {
        background: '#d7d7d7',
        '& td': {
          fontSize: 20,
        },
      },
    },
  },
}));
