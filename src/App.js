
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import "./style.css";
import Section from './components/Section';
import Footer from './components/footer';

function App() {

  const arr = [
    {
        title:"Blog",
        des:">A paragraph is a unit of writing that connects the small ideas of individual sentences to a bigger idea. Learn how to structure, write, and edit paragraphs for different types of writingA paragraph is a unit of writing that connects the small ideas of individual sentences to a bigger idea.>A paragraph is a unit of writing that connects the small ideas of individual sentences to a bigger idea. Learn how to structure, write, and edit paragraphs for different types of writingA paragraph is a unit of writing that connects the small ideas of individual sentences to a bigger idea."
    },
    {
        title:"Skills",
        des:">A paragraph is a unit of writing that connects the small ideas of individual sentences to a bigger idea. Learn how to structure, write, and edit paragraphs for different types of writingA paragraph is a unit of writing that connects the small ideas of individual sentences to a bigger idea.>A paragraph is a unit of writing that connects the small ideas of individual sentences to a bigger idea. Learn how to structure, write, and edit paragraphs for different types of writingA paragraph is a unit of writing that connects the small ideas of individual sentences to a bigger idea."
    },
    {
        title:"Contact",
        des:">A paragraph is a unit of writing that connects the small ideas of individual sentences to a bigger idea. Learn how to structure, write, and edit paragraphs for different types of writingA paragraph is a unit of writing that connects the small ideas of individual sentences to a bigger idea.>A paragraph is a unit of writing that connects the small ideas of individual sentences to a bigger idea. Learn how to structure, write, and edit paragraphs for different types of writingA paragraph is a unit of writing that connects the small ideas of individual sentences to a bigger idea."
    }
   
]

  return (
    <div >
     <Navbar />
     <About />
     {
       arr.map((info) =>(
        <Section title ={info.title} des ={info.des} />
       ))
     }
     <Footer />
    </div>
  );
}

export default App;
