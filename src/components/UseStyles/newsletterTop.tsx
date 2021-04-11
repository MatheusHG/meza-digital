import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const StyledLetter = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: '20px 0'
    },
  }),
);

export default StyledLetter;