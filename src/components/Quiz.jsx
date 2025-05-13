import { useState } from "react"

export const Quiz = () => {
  const [feeling, setFeeling] = useState("");
  const [meditation, setMeditation] = useState("");
  const [grateful, setGrateful] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const meditationFrequency = ["Daily", "Weekly", "Monthly", "Never"];
  const currentFeelings = ["Drained", "Happy", "Peaceful", "Relaxed", "Sleepy", "Stressed", "Zen"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAnswers = () => {
    setFeeling("");
    setMeditation("");
    setGrateful("");
    setSubmitted(false);
  }

  return (<div className="mental-checker">
    {!submitted ? (
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <h2>How are you feeling: </h2>
          <select className="feeling-selection" name="feeling selector" onChange={event => setFeeling(event.target.value) } value={feeling} required>
            <option value="">Select how you are feeling</option>
            {currentFeelings.map(currentFeeling => (
              <option key={currentFeeling} value={currentFeeling}>{currentFeeling}</option>
            ))}
          </select>
        </label>
          <h2>How often do you meditate:</h2>
          {meditationFrequency.map(frequency => (
            <label className="meditation" key={frequency}>
              {frequency}
              <input 
                type="radio"
                name="meditation frequency" 
                value={frequency}
                onChange={event => setMeditation(event.target.value)}
                checked={meditation === frequency}
                required
              />
            </label>
          ))}
        <label>
          <h2>What are you grateful for today?</h2>
          <input type="text" value={grateful} onChange={event => setGrateful(event.target.value)} required />
        </label>
        <button>Submit</button>
      </form>
    ) : (
      <div className="answers">
        <h2>Check-in</h2>
        <p>You're currently feeling {feeling.toLowerCase()} and meditating {meditation.toLowerCase()}. You also said you are grateful for {grateful.toLowerCase()}.</p>
        <div className="reset">
          <button onClick={() => setSubmitted(false)}>Change Answers</button>
          <button onClick={() => resetAnswers()}>Clear Answers</button>
        </div>
      </div>
    )}
  </div>)
}