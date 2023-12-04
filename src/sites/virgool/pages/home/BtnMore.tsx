import { Button } from 'antd'
import React from 'react'
import { HiOutlineHeart } from 'react-icons/hi'

const BtnMore = ({
  bgColor,
  text,
}:any) => {
  return (
    <Button
    //shape={'circle'}
    size='middle'
    style={{
      background: bgColor,
    }}         
    >
      {text}
    </Button>
  )
}

export default BtnMore