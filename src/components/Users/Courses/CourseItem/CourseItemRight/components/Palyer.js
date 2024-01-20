export default function Player({ link, title }) {
  return (
    <iframe
      width="100%"
      height="300"
      className="aspect-video border-2 border-deep-purple-400 rounded-xl overflow-hidden"
      src={link}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
