// Array of model objects with their source, location, and scale information
const models = [
    {
        src: 'model-one.glb',
        latitude: 12.9715987,
        longitude: 77.5945627,
        scale: '2 2 2'
    },
    {
        src: 'model-two.glb',
        latitude: 12.9655987,
        longitude: 77.5895627,
        scale: '1.5 1.5 1.5'
    }

    // Add more models with their corresponding locations and scales here
];

// Set a threshold for the distance (in degrees) that will be considered for displaying the model
const distanceThreshold = 0.01;

// Function to load a 3D model if the user's location is near one of the specified locations
function loadModelIfNearby(position) {
    const currentLatitude = position.coords.latitude;
    const currentLongitude = position.coords.longitude;

    let modelLoaded = false;

    // Iterate through the models array and check if the user's location is close enough to any model's location
    for (const model of models) {
        if (Math.abs(currentLatitude - model.latitude) <= distanceThreshold &&
            Math.abs(currentLongitude - model.longitude) <= distanceThreshold) {
            
            const modelViewer = document.querySelector('model-viewer');
            modelViewer.src = model.src; // Set the source of the model to be displayed
            modelViewer.style.display = 'block'; // Make the model visible
            modelViewer.setAttribute('scale', model.scale); // Set the scale for the loaded model

            // Activate AR mode once the model is loaded
            modelViewer.addEventListener('load', () => {
                modelViewer.activateAR();
            });

            modelLoaded = true;

            // Stop checking other models once a model is loaded
            break;
        }
    }

    // Show an alert if the user is not close enough to any of the desired locations to load the 3D models
    if (!modelLoaded) {
        alert('You are not close enough to any of the desired locations to load the 3D models.');
    }
}

// Function to handle geolocation errors
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

// Get the user's current position and call the loadModelIfNearby function if successful, otherwise call the error function
navigator.geolocation.getCurrentPosition(loadModelIfNearby, error);

