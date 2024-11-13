import { auth } from "@/auth";

const Dashboard = async () => {
  const session = await auth();
  console.log(session?.user.id?.toUpperCase());

  return (
    <div className='max-w-screen-xl mx-auto py-5 p-4'>
      <h1 className='text-2xl'>Dashboard</h1>
      <h2 className='text-xl'>
        Welcome Back: <span className='font-bold'>{session?.user?.name}</span>
      </h2>
    </div>
  );
};

export default Dashboard;
