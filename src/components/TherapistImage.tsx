import React from "react";

export const TherapistImage = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-therapy-background">
      <img
        src="https://images.unsplash.com/photo-1581091226825"
        alt="AI Therapist"
        className="max-w-[80%] max-h-[80vh] object-contain rounded-2xl shadow-lg"
      />
    </div>
  );
};