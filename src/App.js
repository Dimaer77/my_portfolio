
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Contact from "./contact/Contact";
import {Footer} from "./Footer/Footer";
import photo from "./image/photo.png"

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Contact/>
            <Footer/>



        </div>
    );
}

export default App;
