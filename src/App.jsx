import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './sidebar'
import Notesapp from './Notesapp'
import Card from 'react-bootstrap/Card';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return <>
  
     <BrowserRouter>
     <Sidebar/>
       <Routes>
          <Route path="/Notesapp" element={ <Notesapp/>  }/>
       </Routes>
     </BrowserRouter>
     <div className="notesbox">
       <div class="heading" >
        <h2 class="add">Add a Note</h2>
        <h3 class="add">Title</h3>
        <h4>Take a note...</h4>
       </div>
  
       <div className="noteshead">
         <h4 className="mynotes">My Notes</h4>
         <h5>Recently Viewed</h5>
       </div>

       
      {[
        'FeedBacks',
        'Weekly Task',
        'Lyrics',
      ].map((content) => (
        <Card
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>{content}</Card.Header>
          <Card.Body>
            
            <Card.Text className="text">
             Lorem ipsum dolor sit amet consectetur.sollicitudin enim risus ut vestibulum morbi tellus sit ac.Fames auctor quisque et aliquam maecenas sed at vitae facilisis<br/>
            5 days ago
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
       </div>
  </>
}

export default App
