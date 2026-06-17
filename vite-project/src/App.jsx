import { useState } from "react";
import "./App.css";
import { data } from "./data/data";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>

      <table>
        <thead>
          <tr>
            <th>row_number</th>
            <th>first_name</th>
            <th>last_name</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? true
                : item.first_name.toLowerCase().includes(search);
            })
            .map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
