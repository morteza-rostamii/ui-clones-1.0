import React, {useEffect, useState} from 'react';
import {  Button, Drawer  } from 'antd';

const SideMenu = (props:any, ref:any) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (ref?.current) ref.current = showDrawer;
  }, [showDrawer]);

  return (
    <>
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default React.forwardRef(SideMenu);

