let count = 0
document.addEventListener("click", (e) => {
  console.log("Button")
  let text = document.querySelector("input")
  count++
  text.value = count
})
  // Get the button and audio element
  const playButton = document.getElementById('playButton');
  const audio = document.getElementById('audio');
  // Add event listener to the button
  playButton.addEventListener('click', function() {
    console.log("test")
    // Check if the audio is paused, if so, play it
    if (audio.paused) {
      audio.play()
        .then(() => console.log('Audio is playing'))
        .catch(error => console.error('Error playing audio:', error));
    } else {
      // If audio is already playing, pause it
      audio.pause();
      audio.currentTime = 0; // Reset audio to start
    }
  });
 