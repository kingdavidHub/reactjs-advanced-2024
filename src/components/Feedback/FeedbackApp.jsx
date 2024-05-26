import React from 'react'
import FeedbackForm from './FeedbackForm';

const FeedbackApp = () => {
  const handleSubmit = (submitDetails) => {
    console.log("Form is submited", submitDetails);
  }
  return (
    <>
      <FeedbackForm onSubmit={handleSubmit}/>
    </>
  )
}

export default FeedbackApp