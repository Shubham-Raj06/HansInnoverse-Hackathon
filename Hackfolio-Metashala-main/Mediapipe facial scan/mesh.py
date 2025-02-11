import mediapipe as mp
import numpy as np
import cv2

# Open webcam
cap = cv2.VideoCapture(0)

# Initialize Mediapipe Face Mesh
facemesh = mp.solutions.face_mesh
face = facemesh.FaceMesh(static_image_mode=False, min_tracking_confidence=0.6, min_detection_confidence=0.6)
draw = mp.solutions.drawing_utils

while True:
    ret, frm = cap.read()
    if not ret:
        break  # Exit loop if there's an issue with webcam

    rgb = cv2.cvtColor(frm, cv2.COLOR_BGR2RGB)

    # Process the frame for face landmarks
    result = face.process(rgb)
    
    if result.multi_face_landmarks:
        for landmarks in result.multi_face_landmarks:
            draw.draw_landmarks(
                frm, 
                landmarks, 
                landmark_drawing_spec=draw.DrawingSpec(thickness=1, circle_radius=1)  # Fix landmark drawing
            )

    # Show output
    cv2.imshow("Face Mesh", frm)

    # Exit on pressing 'ESC' key
    if cv2.waitKey(1) & 0xFF == 27:
        break

# Release resources
cap.release()
cv2.destroyAllWindows()
