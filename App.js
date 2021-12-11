// to connect those imports to the component folder.
import './App.css';
import Card from './Components/card';
import Card2 from './Components/card';

// this makes those title, description, and card names and damage titles to appear in the screen.
function App() {
  return (
    <div className="App">
      <h1>Project Bad Blood</h1>
      Everyone loves the obsession or temptation of retaliating your own worst nemesis. Therefore, it’s addicting and “juicy”, and it can create the major accusations between the opponents, basically the “he said, she said." For example, in my own perspective, my ex-best friend accused me of lying that I wanted to hang out with the family instead of going hiking with her and her boyfriend from last Summer before Memorial Day. Toxicities is at its finest and it’s the opposite of “tough love.” 
      
      My decision is to create trading cards that is inspired of my current beef with that bully that she and I used to be friends from 6 1/2 years, utilizing HTML, CSS, JavaScript, and other JavaScript programming languages that I learned throughout in class this semester. It’s called “The Avenger”, but with celebrities. Just to note there: this is fictional and if those celebrities are feeling offended, I apologized for the misunderstanding but again, this is fictional. Please don’t “@” me or DM me for negative tendencies, verbally. Don’t try to sue me when you see my project. This is for my class final project.

{/* Activated when the celebrities' name, alias, locations, and damage level show up on the webpage */}
      <h1>Female Cards</h1>
      <Card></Card>
      <h1>Male Cards</h1>
      <Card2></Card2>
    </div>
  );
}

export default App;
