import CourseTile from '../components/CourseTile'; // Adjust the path as needed

const HomePage = () => {
  const courses = [
    { title: 'Course 1', progress: 50, description: 'Description of course 1' },
    { title: 'Course 2', progress: 75, description: 'Description of course 2' },
    // Add more courses as needed
  ];

  return (
    <div>
      <CourseTile courses={courses} />
    </div>
  );
};

export default HomePage;
