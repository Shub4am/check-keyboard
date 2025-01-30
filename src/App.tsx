import { Testkey } from "./components/Testkey";

function App() {
  return (
    <div className="container">
      <h1>Keyboard Check</h1>

      <Testkey />
      <div className="footer">
        Press any key on your <span className="keybs"> keyboard </span> to check
        if its <span className="working-keys"> working </span> or{" "}
        <span className="not-working"> not </span>
      </div>
    </div>
  );
}

export default App;
