
import "../App.css";
import { useState } from "react";
import Papa from "papaparse";
import Rehash from "./Rehash.component"
function Home() {
  // State to store parsed data
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);
  const [haben, setHaben] = useState([]);
  const [soll, setSoll] = useState([]);
  const [tasks, setTask] = useState([{id:1, title:"sadfsdf", description:"sdfsdf"}]);
  var ASoll = []

  var AHaben = []
  var ASoll2 = []

  var AHaben2 = [1,2,3]
  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

       
        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });
       
        results.data.map(el=>{ASoll.push(el["Soll"])})
        
        results.data.map(el=>{AHaben.push(el["Haben"])})

        var AHaben2 = AHaben.map(function(str) {
            // using map() to convert array of strings to numbers
   
            return parseInt(str); });
        var ASoll2 = ASoll.map(function(str) {
                // using map() to convert array of strings to numbers
       
            return parseInt(str); });        

        setHaben(AHaben2)
        setSoll(ASoll2)
        console.log(this.state.haben, this.state.soll)
        // Parsed Data Response in array format
        
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);

        setHaben(AHaben)

     
      },
    });
  };

  return (
    <div>
      <h1>You see here the task with id {task.id}</h1>
      <h1>Title: {task.title}</h1>
      <h1>Description: {task.description}</h1>
      <div className="select-container">
          <select>
            {tasks.map((task) => (
              <option value={task.id}>{task.title}</option>
            ))}
          </select>
      </div>
      {/* File Uploader */}
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />
      <br />
      <br />
      {/* Table */}
      <table>
        <thead>
          <tr>
            {tableRows.map((rows, index) => {
              return <th key={index}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((val, i) => {
                  return <td key={i}>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <Rehash data={haben} key={haben} datafunc={setHaben}/>
      <Rehash data={soll} key={soll} datafunc={setSoll}/>
      
      <button
        onClick={() => {
          console.log(haben)
          console.log(soll)

        }}
      >
        Save
      </button>
    </div>
  );
}


export default Home