import React from 'react';

import './styles.css';
import './response.css';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';

const Options: React.FC = () => {
    return (
        <Box className="boxOptions">
            <Button
                variant="contained"
                color="secondary"
                className="buttonOption"
                startIcon={<ViewComfyIcon />}
            >
                Quantidade
            </Button>
            <Button
                variant="contained"
                color="secondary"
                className="buttonOption"
                startIcon={<CompareArrowsIcon />}
            >
                Ordernar
            </Button>
        </Box>
    );
}

export default Options;