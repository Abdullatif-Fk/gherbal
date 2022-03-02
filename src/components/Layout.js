import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
} from '@material-ui/core';
import LanguageIcon from '@mui/icons-material/Language';
import React from 'react';
import i18next from 'i18next';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  const languages = [
    // {
    //   code: 'fr',
    //   name: 'Français',
    //   country_code: 'fr',
    //   path: '/fr',
    // },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
      path: '/',
    },
    {
      code: 'ar',
      name: 'العربية',
      dir: 'rtl',
      country_code: 'sa',
      path: '/ar',
    },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);

    // handleClose();
  };
  const handleClose = (e, lng) => {
    setAnchorEl(null);
    // console.log(lng);
    i18next.changeLanguage(lng);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <LanguageIcon style={{ color: 'white' }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {languages.map((lng) => (
                <Link to={`${lng.path}`}>
                  <MenuItem onClick={(e) => handleClose(e, `${lng.code}`)}>
                    {lng.name}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      <Container>{children}</Container>

      {/* <footer>
        <Typography>
          All <strong>@Abed</strong> rights reserved. Next Shop 2022.
        </Typography>
      </footer> */}
    </div>
  );
}
