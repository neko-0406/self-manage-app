import Box from '@mui/material/Box';
import SideMenu from './SideMenu';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* ここにメインコンテンツが表示されます */}
      </Box>
    </Box>
  );
};

export default Layout;
