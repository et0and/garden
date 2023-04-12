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
            // Add more models with their corresponding locations here
        ];

        const distanceThreshold = 0.01; // Adjust this value based on the range (in degrees) you want to consider for displaying the model

        function loadModelIfNearby(position) {
            const currentLatitude = position.coords.latitude;
            const currentLongitude = position.coords.longitude;

            let modelLoaded = false;

            for (const model of models) {
                if (Math.abs(currentLatitude - model.latitude) <= distanceThreshold &&
                    Math.abs(currentLongitude - model.longitude) <= distanceThreshold) {
                    
                    const modelViewer = document.querySelector('model-viewer');
                    modelViewer.src = model.src;
                    modelViewer.style.display = 'block';

                    modelViewer.addEventListener('load', () => {
                        modelViewer.activateAR();
                    });

                    modelLoaded = true;

                    // Stop checking other models once a model is loaded
                    break;
                }
            }

            if (!modelLoaded) {
                alert('Sorry, you are not close enough to any of the desired locations to load the 3D models.');
            }
        }

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(loadModelIfNearby, error);
