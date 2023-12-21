const ImageWithCaption = ({ imageSrc, caption }) => {
  return (
    <div className="max-w-xs mx-auto">
      <img src={imageSrc} alt={caption} className="rounded-lg shadow-md mb-4" />
      <p className="text-center text-sm text-gray-600">{caption}</p>
    </div>
  );
};

export default ImageWithCaption;