import React from 'react'

const ImageList=(props)=> {
  const images=  props.images.map(({descriptions,id,urls})=>{
        return <img alt={descriptions}key={id} src={urls.regular} />
    });
  return (
    <div>{images}</div>
  )
}

export default ImageList;