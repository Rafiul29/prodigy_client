
const CourseInstructor = ({ name, photo }) => {
  
  return (
    <div>
      <img src={photo} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default CourseInstructor;
