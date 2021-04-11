import React from 'react';
import './styles.css';

import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import HealingIcon from '@material-ui/icons/Healing';
import MoodIcon from '@material-ui/icons/Mood';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import CardMedia from '@material-ui/core/CardMedia';

import logomarca from '../../assets/logomarca.png';

import StyledMenu from '../UseStyles/menu';
import StyledMenuItem from '../UseStyles/menuItem';
import navBar from '../UseStyles/navBar';

const NavBar: React.FC = () => {
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = navBar();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <LocalOfferIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Ofertas" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <HealingIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Medicamentos" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <MoodIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Beleza" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <ChildFriendlyIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Bebê e Criança" />
        </StyledMenuItem>
      </StyledMenu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <ShoppingBasketIcon style={{ color: '#12B6DF' }} />
        </IconButton>
        <p>Carrinho</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Conecte-se</p>
      </MenuItem>
    </Menu>
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box className={classes.grow}>
      <AppBar position="static">
        <Toolbar className="navTop">
          <CardMedia component="img" image={logomarca} alt="Logomarca" className={classes.img} />
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleClick}
          >
            <MenuIcon/>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Categorias
          </Typography>
          <Box className={classes.search}>
            <Box className={classes.searchIcon}>
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="O que você procura?"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box>
          <Box className={classes.grow} />
          <Box className={classes.sectionDesktop}>
            <IconButton
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle style={{marginRight: '10px'}} />
              <h2 className={classes.titleEntrar}>ENTRAR</h2>
            </IconButton>
            
            <IconButton aria-label="cart" color="inherit">
              <ShoppingBasketIcon style={{ color: '#12B6DF' }} />
            </IconButton>
          </Box>
          <Box className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

export default NavBar;