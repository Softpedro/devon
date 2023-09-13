
import React, { useState } from 'react'

import { 
  Box,
  Container,
  IconButton,
  Typography,
  Button,
  MenuItem
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/images/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const pages = ['Series', 'Movies'];
const Header = () => {
  const [handleModal, setHandleModal] = useState<Boolean>(false);

  const modalAction = () => {
    setHandleModal(!handleModal);
  };

  return (
    <Box sx={{ backgroundColor: 'black', zIndex: '999', height: '80px'}}>
      <Container sx={{ height: '100%', position: 'relative' }}>
        <Box sx={{ display: 'flex', height: '100%' }}>
          <Box sx={{  display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link href="/">
                <Image src={Logo} alt="logo" width={150} height={80} />
              </Link>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                onClick={modalAction}
                color="inherit"
              >
                <MenuIcon sx={{ color: 'white' }}/>
              </IconButton>
              {
                handleModal && (
                  <Box
                    sx={{
                      position: 'absolute', top: '100%', left: '0', boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)', 
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} sx={{ backgroundColor: 'black', color: 'white' }}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Box>
                )
              }
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, }}>
            <Image src={Logo} alt="logo" width={150} height={80} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={modalAction}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
