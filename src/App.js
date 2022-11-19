
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackForm from "./components/FeedbackForm"
import AboutPages from './pages/AboutPages'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconlink from './components/AboutIconlink'
import FeedbackStats from './components/FeedbackStats'

function App() {


    return (
        <FeedbackProvider>
    <Router>
   <Header text = 'Feedback UI'/>        
        <div className="container">
            <Routes>
            <Route exact path='/' element={
                <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
                </>
            }>
            
            </Route>
            <Route path='/about' element={<AboutPages/>}/>
            </Routes>
            <AboutIconlink/>
        </div>
        </Router>
        </FeedbackProvider>
    )
}
export default App