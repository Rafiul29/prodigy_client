import Palyer from "../../Player/Palyer";
const Video = ({ video }) => {
  const {video_link,name}=video;
  return (
    <div className="flex flex-col gap-2">
      <div>
      <Palyer link={video_link} title={name} />
      </div>
      <h3 className="text-md text-gray-900">{name}</h3>
    </div>
  );
};

export default Video;
