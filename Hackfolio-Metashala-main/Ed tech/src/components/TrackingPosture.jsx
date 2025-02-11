import React from "react";

const TrackingPosture = () => {
  // Replace 'YOUR_TRACKING_APP_URL' with the actual URL of your posture tracking application
  const trackingAppUrl = "YOUR_TRACKING_APP_URL";

  function handleClick(event) {
    event.preventDefault();
    // Handle click event here
  }
  

  return (
    
    <div className="ml-[20%]">
      <div className=" bg-gray-100 p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Classroom Paath-Shala</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">

          <iframe src="https://www.spatial.io/s/hridey_puris-Hi-Fi-Scene-6719e926e1013846dce6554a" width="1280px" height="720px" allow="camera; fullscreen; autoplay; display-capture; microphone; clipboard-write"></iframe><div>
          <a href="https://www.spatial.io/s/hridey_puris-Hi-Fi-Scene-6719e926e1013846dce6554a" onClick={handleClick}>CLASS LINK</a>
          </div>

          </div>
       { /* <div className2="bg-white p-6 rounded-lg shadow-md">
          <iframe src="https://www.spatial.io/embed/Paath-Shala-66044c0f8574d3c893cfb8d8?share=3630728586723557873&autoplay=1&enableRtc=1" width="1280px" height="720px" allow="camera; fullscreen; autoplay; display-capture; microphone; clipboard-write"></iframe>
          <div>
          <a href="#" onClick={handleClick}>Click me</a>
          </div> 
          </div>*/}
        </div>
      </div>

      {/* Additional content or sections can be added here */}
    </div>
  );
};

export default TrackingPosture;
