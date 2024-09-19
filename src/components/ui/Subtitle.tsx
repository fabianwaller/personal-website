type SubtitleProps = {
  children: React.ReactNode;
};

const Subtitle: React.FC<SubtitleProps> = (props) => {
  return <span className="text-sm block">{props.children}</span>;
};

export default Subtitle;
