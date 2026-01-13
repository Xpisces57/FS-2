import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <p style={styles.text}>Count is {count}</p>

        <div>
          <button onClick={() => setCount(count - 1)} style={styles.btn}>
            −
          </button>
          <button onClick={() => setCount(count + 1)} style={styles.btn}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
  },
  box: {
    border: "2px solid white",
    padding: "20px 40px",
    borderRadius: "12px",
    textAlign: "center",
    color: "white",
  },
  text: {
    fontSize: "22px",
    marginBottom: "10px",
  },
  btn: {
    fontSize: "20px",
    padding: "8px 15px",
    margin: "0 8px",
    cursor: "pointer",
    borderRadius: "6px",
    border: "none",
  },
};

export default Counter;
