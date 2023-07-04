import { Box, ThemeProvider } from '@mui/system';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { Typography } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './features/home/Home';
import { ListCategory } from './features/categories/ListCategory';
import { CreateCategory } from './features/categories/CreateCategory';
import { EditCategory } from './features/categories/EditCategory';
import { SideMenu } from './components/SideMenu';

function App() {
  return <ThemeProvider theme={appTheme}>
    <Box 
      component='main' 
      sx={{
        height: '100vh',
        backgroundColor: (theme) => theme.palette.grey[900],
      }}
    >
      <Header />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='category/list' element={<ListCategory />} />
          <Route path='category/create' element={<CreateCategory />} />
          <Route path='category/edit/:id' element={<EditCategory />} />

          <Route path='*' element={
            <Box>
              <Typography variant='h1'>404</Typography>
              <Typography variant='h2'>Page not found</Typography>
            </Box>
          }></Route>

        </Routes>
      </Layout>
    </Box>
  </ThemeProvider>;
  
}

export default App;
