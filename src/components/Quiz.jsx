import { useState } from "react"

export const Quiz = () => {
  const [feeling, setFeeling] = useState("");
  const [meditation, setMeditation] = useState("");
  const [grateful, setGrateful] = useState("");
  console.log(feeling, meditation, grateful)

  return (<div className="mental-checker">
    <h1>Mental Health Month</h1>
    <p>May being the mental health awareness month is a good reminder to check in on yourself and how you are feeling.</p>
    <form className="form" action="">
      <label>
        <h2>How are you feeling: </h2>
        <select className="feeling-selection" name="feeling selector" onChange={event => setFeeling(event.target.value) } value={feeling}>
          <option value="">Select how you are feeling</option>
          <option value="Drained">Drained</option>
          <option value="Happy">Happy</option>
          <option value="Peaceful">Peaceful</option>
          <option value="Relaxed">Relaxed</option>
          <option value="Sleepy">Sleepy</option>
          <option value="Stressed">Stressed</option>
          <option value="Zen">Zen</option>
        </select>
      </label>
        <h2>How often do you meditate:</h2>
      <label>
        Daily: 
        <input type="radio" value="Daily" name="meditation" checked={meditation === "Daily"} onChange={(event) => setMeditation(event.target.value)}  />
      </label>
      <label>
        Weekly: 
        <input type="radio" value="Weekly" name="meditation" checked={meditation === "Weekly"} onChange={(event) => setMeditation(event.target.value)}  />
      </label>
      <label>
        Monthly: 
        <input type="radio" value="Monthly" name="meditation" checked={meditation === "Monthly"} onChange={(event) => setMeditation(event.target.value)}  />
      </label>
      <label>
        Never: 
        <input type="radio" value="Never" name="meditation" checked={meditation === "Never"} onChange={(event) => setMeditation(event.target.value)}  />
      </label>
      <label>
        <h2>What are you grateful for today?</h2>
        <input type="text" value={grateful} onChange={event => setGrateful(event.target.value)} />
      </label>
      <button>Submit</button>
    </form>
  </div>)
}