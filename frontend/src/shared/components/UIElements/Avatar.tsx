type AvatarProps = {
  image: string;
  alt: string;
};
const Avatar: React.FC<AvatarProps> = ({ image, alt }) => {
  return (
    <div className={`w-full h-full flex justify-center items-center`}>
      <img
        src={image}
        alt={alt}
        className="block rounded-full w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;
