const ImageBuilder = ({height, width}) => {
  return <>
    <img src={`https://picsum.photos/${height}/${width}`} alt="test img" />
  </>
}

export default ImageBuilder;