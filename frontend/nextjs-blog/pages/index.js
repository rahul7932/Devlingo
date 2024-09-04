import CourseTileRenderer from '../components/CourseTileRenderer'; // Adjust the path as needed

const HomePage = () => {
  const courses = [
    { title: 'Course 1', progress: 50, description: 'Description of course 1', courseId:"12345"},
    { title: 'Course 2', progress: 75, description: 'Description of course 2', courseId:"12345" },
    { title: 'Course 3', progress: 75, description: 'Description of course 2', courseId:"12345" },
    { title: 'Course 5', progress: 75, description: 'Description of course 2', courseId:"12345" },
    // Add more courses as needed
  ];

  return (
    <div>
          <CourseTileRenderer title="My Courses" courses={courses} />
          <CourseTileRenderer title="All Courses" courses={courses}/>
    </div>
  );
};

export default HomePage;
