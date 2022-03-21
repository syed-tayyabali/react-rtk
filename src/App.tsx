import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Counter from './containers/Counters/Counter'
import FortniteCreateApi from './containers/FortniteCreateApi/FortniteCreateApi'
import Nav from './components/Nav/Nav'
import FortniteAsyncThunk from './containers/FortniteAsyncThunk/FortniteAsyncThunk'
import ItemDetail from './containers/ItemDetail/ItemDetail'

const App = () => {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Counter />} />
          <Route path='/FortniteCreateApi' element={<FortniteCreateApi />} />
          <Route path='/FortniteCreateApi/:id' element={<ItemDetail />} />
          <Route path='/FortniteAsyncThunk' element={<FortniteAsyncThunk />} />
          <Route path='/FortniteAsyncThunk/:id' element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;