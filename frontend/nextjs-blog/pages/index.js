import CourseTileRenderer from '../components/CourseTileRenderer'; // Adjust the path as needed

const HomePage = () => {
  const courses = [
    { title: 'Introduction to Go Programming', progress: 50, description: '"Introduction to Go Programming" is a concise course that teaches you the fundamentals of Go, from basic syntax to advanced concurrency, equipping you with the skills to build efficient applications.', courseId:"12345"},
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
