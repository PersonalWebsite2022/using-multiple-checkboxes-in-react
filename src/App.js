import './App.css';
import { useState } from 'react';

function App() {
  // //Single checkbox
  // const [isChecked, setIsChecked] = useState(false);
  // const handleOnChange = () =>{
  //   setIsChecked(!isChecked);
  // }
  // return (
  //   <div className="App">
  //     Select the sports your like:
  //     <div>
  //       <input 
  //         type="checkbox" 
  //         id="soccer" 
  //         name="topsoccerping" 
  //         value="soccer" 
  //         checked={isChecked}
  //         onChange={handleOnChange}
  //         />Soccer
  //     </div>
  //     <div>
  //       <p>Your selection:</p>
  //       {isChecked?"Soccer":""}
  //     </div>
  //   </div>
  // );
    const sports = [
      {
        Id: 1,
        Name: "Soccer"
      },
      {
        Id: 3,
        Name: "Basketball"
      },
      {
        Id: 6,
        Name: "Baseball"
      }
    ]
    const [checkedState, setCheckedState] = useState(new Array(sports.length).fill(false));
    const [checkedSports, setCheckedSports] = useState('');
    const handleOnChange = (position) => {
      const updatedCheckedState = checkedState.map((item, index) => {
        if (index === position) {
          return !item;
        } else {
          return item;
        }
      });
      setCheckedState(updatedCheckedState);
      const yourSelection = updatedCheckedState.reduce(
        (name, currentState, index) => {
          if (currentState === true) {
            return name + ", " + sports[index].Name;
          }
          return name
        },
        ''
      );
      setCheckedSports(yourSelection.length>0?yourSelection.substring(2, yourSelection.length): yourSelection)
    }
  return (
    <div>
      <div>
        {sports.map(({ Id, Name }, index) => {
          return (
            <div key={index}>
              <input
                    type="checkbox"
                    id={`sport-checkbox-${index}`}
                    name={Id}
                    value={Id}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`sport-checkbox-${index}`}>{Name}</label>
            </div>
            );}
        )}
      </div>
      <div>
        <p>Your selection:</p>
        {checkedSports}
      </div>
    </div>
  );
}

export default App;
