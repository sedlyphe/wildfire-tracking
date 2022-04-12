import { useState, useEffect } from 'react';
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header';

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  const [id, setId] = useState(0)
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()
      setEventData(events)
      setLoading(false)
    }
    fetchEvents().then( () => setId(8) )
  }, [])

  useEffect(() => {
    setFilteredData(eventData.filter(event => event.categories[0].id===id))
  }, [id])

  return (
    <div>
      {!loading && <Header setId={setId}/>}
      {!loading ? <Map eventData={filteredData} markerId={id} /> : <Loader/>}
    </div>
  );
}

export default App;