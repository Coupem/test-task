import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  contentGraphql: {
    marginTop: theme.spacing(10),
    margin: 'auto',
    width: 400,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    boxShadow: '1px 3px 21px 1px rgb(174, 174, 174)',
  },

  input: {
    width: 200,
    marginTop: theme.spacing(2),
    borderRadius: 10,
    height: 40,
    border: '2px solid #565151',
    '&:focus-visible': {
      outline: 'none',
    },
    fontSize: 20,
  },

  wrapperInput: {
    width: 200,
    margin: 'auto',
  },

  wrapperButton: {
    marginTop: theme.spacing(5),
    display: 'flex',
    justifyContent: 'space-around',
  },

  btn: {
    width: 150,
    height: 50,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: 10,
    fontSize: 20,
    backgroundColor: 'gray',
    color: 'white',
    border: '2px solid #565151',
  },
}));
