import "../globals.css";
import React from 'react';

export default function Rules(){
    return(
     <div>
        <h2>Things to know</h2>
        <div className="rules">
        <div>
          <h3>House Rules</h3>
          <p>Check-in: 10:00 AM</p>
          <p>Checkout before 10:00 AM</p>
          <p>If room is to exceed the guest maximum, contact customer care for further help.</p>
        </div>
        <div>
          <h3>Safety & property</h3>
          <p>Carbon monoxide alarm not reported</p>
          <p>Smoke alarm</p>
        </div>
        <div>
          <h3>Cancellation policy</h3>
          <p>Free cancellation 2 weeks before.</p>
          <p>Contact help center for cancellation.</p>
        </div>
      </div>
      </div>
    );
};