import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Card from '@/components/Card';
import Component1 from '@/components/Component1';
import Component2 from '@/components/Component2';
import Component3 from '@/components/Component3';

const HomePage = () => {
  const component1Data = {
    title: 'Component 1',
    content: 'This is Component 1 content.',
  };

  const component2Data = {
    title: 'Component 2',
    content: 'This is Component 2 content.',
  };

  const component3Data = {
    title: 'Component 3',
    content: 'This is Component 3 content.',
  };

  return (
    <div className="app flex">
      <Sidebar />
      <div className="flex flex-col flex-grow sm:ml-64 ml-0"> 
        <Navbar />
        <main className="flex-grow overflow-y-auto p-6">
          <div className="flex justify-around gap-3 flex-wrap"> 
          
            <Card />
            
          </div>

         
          <div className="flex sm:flex-row flex-col justify-around mt-7 gap-3">
            
            <div className="flex flex-col">
            
              <Component1 {...component1Data} />

           
              <Component2 {...component2Data} />
            </div>

          
            <Component3 {...component3Data} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;