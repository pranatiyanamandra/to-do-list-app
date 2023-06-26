import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Create, Update & Analyze
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Tasks</span>
    </h1>
    <p className='desc text-center'>
    To-Do App App is a to-do list app that implements the Pomodoro Technique, along with an analytics dashboard to track task completion and productivity.
    </p>
    <Feed></Feed>

  </section>
);

export default Home;
