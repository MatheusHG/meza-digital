import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(2),
      padding: '10px 40px 10px 40px',
      backgroundColor: '#FFF',
      '&:hover': {
        backgroundColor: '#F3F3F3',
      },
      color: '#969696'
    },
  }),
);

const Options: React.FC = () => {
    const classes = useStyles();
    return (
        <Box style={{width: '100%', textAlign: 'right'}}>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<ViewComfyIcon />}
            >
                Quantidade
            </Button>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<CompareArrowsIcon />}
            >
                Ordernar
            </Button>
        </Box>
    );
}

export default Options;