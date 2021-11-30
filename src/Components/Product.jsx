import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components';


const MenuItem = styled.div`
font-size: 5px;
cursor: pointer;
margin-left: 15px;
color: white;

`;

const Image = styled.img`
    border-radius: 8px;
    padding: 5px;
    width: 150px;
    `;
  
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const theme = createTheme();


     function Product() {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="relative">
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                Search your products...
              </Typography>
            </Toolbar>
          </AppBar>
          <main>
            
            <Box
              sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
              }}
            >
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Welcome to Isaac's Ecom Shop
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                 
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button variant="contained">Home</Button>
                  <Button variant="outlined">Cart</Button>
                </Stack>
              </Container>
              <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search for a food..." aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <Image
                      CardMedia
                        component="img"
                        sx={{
                          pt: '56.25%',
                        }}
                        
                        img src=  "https://m.media-amazon.com/images/I/81dVtLN-c1L._AC_SL1500_.jpg"
                        
                      
                        
                      />

                      
                      
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Check out these Products!!
                        </Typography>
                        <Typography>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Add to Cart</Button>
                        <MenuItem> <a href="/Cart"> <ShoppingCartOutlinedIcon /></a></MenuItem>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
          <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
              Ecom Shop
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              Electronic Accessories that you need.
            </Typography>
            
          </Box>
        </ThemeProvider>
      );
    }

export default Product;