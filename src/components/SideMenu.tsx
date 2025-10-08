import { useState } from 'react';

const SideMenu = () => {
  const [width, setWidth] = useState<number>(20);

  const sideMenuOpen = () => setWidth(300);
  const sideMenuClose = () => setWidth(20);

  return <></>;
};

export default SideMenu;
