import { useState } from 'react'

export default function FeedbackForm() {
  const [score, setScore] = useState('10')
  const [comment, setComment] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (Number(score) <= 5 && comment.length <= 10) {
      alert('Please provide a comment explaining why the experience was poor.')
    } else alert('Form Submitted')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h3>Feedback Form</h3>
          <div className="Field">
            <label>Score: </label>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Comment:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button className="Button2" type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  )
}
