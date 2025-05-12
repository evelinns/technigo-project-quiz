import { useState } from "react"

export const Quiz = () => {
  const [feeling, setFeeling] = useState("");
  const [meditation, setMeditation] = useState("");
  const [grateful, setGrateful] = useState("");

  const meditationFrequency = ["Daily", "Weekly", "Monthly", "Never"];
  const currentFeelings = ["Drained", "Happy", "Peaceful", "Relaxed", "Sleepy", "Stressed", "Zen"];

  return (<div className="mental-checker">
    <h1>Mental Health Month</h1>
    <p>May being the mental health awareness month is a good reminder to check in on yourself and how you are feeling.</p>
    <form className="form" onSubmit={(event) => event.preventDefault()}>
      <label>
        <h2>How are you feeling: </h2>
        <select className="feeling-selection" name="feeling selector" onChange={event => setFeeling(event.target.value) } value={feeling}>
          <option value="">Select how you are feeling</option>
          {currentFeelings.map(currentFeeling => (
            <option key={currentFeeling} value={currentFeeling}>{currentFeeling}</option>
          ))}
        </select>
      </label>
        <h2>How often do you meditate:</h2>
        {meditationFrequency.map(frequency => (
          <label key={frequency}>
            {frequency}
            <input 
              type="radio" 
              value={frequency}
              onChange={event => setMeditation(event.target.value)}
              checked={meditation === frequency}
            />
          </label>
        ))}
      <label>
        <h2>What are you grateful for today?</h2>
        <input type="text" value={grateful} onChange={event => setGrateful(event.target.value)} />
      </label>
      <button>Submit</button>
    </form>
  </div>)
}