import React from 'react'
import FeedbackForm from './FeedbackForm';

const FeedbackApp = () => {
  const handleSubmit = () => {
    console.log("Form is submited");
  }
  return (
    <>
      <FeedbackForm onSubmit={handleSubmit}/>
    </>
  )
}

export default FeedbackApp