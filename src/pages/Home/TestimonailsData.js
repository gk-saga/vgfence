import React from 'react'

export const TestimonailsData = (props) => {
    const { ClientName = '', review = '', ProfileImage = '', Profession} = props;
  return (
    <div className="project-item px-2 pb-2 item text-center">
    <img
      class="border rounded-circle p-2 mx-auto mb-3"
      src={ProfileImage}
      style={{ width: "80px", height: "80px" }}
    />
    <h5 class="mb-0">{ClientName}</h5>
    <p>{Profession}</p>
    <div class="testimonial-text bg-light text-center p-4">
      <p class="mb-0">
      {review}
      </p>
    </div>
  </div>
  )
}
