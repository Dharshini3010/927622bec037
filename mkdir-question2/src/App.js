import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [type, setType] = useState('e');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(http://localhost:9876/numbers/${type});
      setData(res.data);
    } catch (error) {
      alert('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Average Calculator</h1>

      <select value={type} onChange={(e) => setType(e.target.value)} style={styles.select}>
        <option value="e">Even</option>
        <option value="p">Prime</option>
        <option value="f">Fibonacci</option>
        <option value="r">Random</option>
      </select>
       <button onClick={handleFetch} style={styles.button}>
        Fetch Numbers
      </button>

      {loading && <p>Loading...</p>}

      {data && (
        <div style={styles.resultBox}>
          <h3>Window Previous State: {JSON.stringify(data.windowPrevState)}</h3>
          <h3>Window Current State: {JSON.stringify(data.windowCurrState)}</h3>
          <h3>Numbers Fetched: {JSON.stringify(data.numbers)}</h3>
          <h3>Average: {data.avg}</h3>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { padding: 20, fontFamily: 'Arial' },
  header: { fontSize: 30, marginBottom: 20 },
  select: { padding: 10, marginRight: 10 },
  button: { padding: 10, background: '#28a745', color: 'white', border: 'none' },
  resultBox: { marginTop: 20, backgroundColor: '#f4f4f4', padding: 15, borderRadius: 5 }
};

export default App;