import { useState } from 'react';
import UpvoteButton from './components/UpvoteButton/UpvoteButton';

function App() {
  const [selected, setSelected] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      <UpvoteButton
        selected={selected}
        onToggle={() => setSelected((prev) => !prev)}
      />
    </div>
  );
}

export default App;
