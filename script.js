const video = document.querySelector(".flex");
      const playButton = document.querySelector(".toggle");

      const progress = document.querySelector(".progress");
      const progressFilled = document.querySelector(".progress__filled");
      const volume = document.querySelector('input[name="volume"]');
      const playbackSpeed = document.querySelector(
        'input[name="playbackSpeed"]',
      );

      const rewindButton = document.querySelector(".rewind");
      const skipButton = document.querySelector(".skip");

      //Play & Pause functionality
      playButton.addEventListener("click", () => {
        if (video.paused) {
          video.play();
          playButton.textContent = "❚❚";
        } else {
          video.pause();
          playButton.textContent = "►";
        }
      });

      // Volume functionality
      volume.addEventListener("input", () => {
        video.volume = volume.value;
      });

      // Playback Speed functionality
      playbackSpeed.addEventListener("input", () => {
        video.playbackRate = playbackSpeed.value;
      });

      // Rewind 10 seconds
      rewindButton.addEventListener("click", () => {
        video.currentTime -= 10;
      });

      // Skip 25 seconds
      skipButton.addEventListener("click", () => {
        video.currentTime += 25;
      });

      //Updating ProgressBar
      video.addEventListener("timeupdate", () => {
        const percent = (video.currentTime / video.duration) * 100;

        progressFilled.style.width = `${percent}%`;
      });

      //Seek video using the progress bar
      progress.addEventListener("click", (e) => {
        const seekTime = (e.offsetX / progress.offsetWidth) * video.duration;

        video.currentTime = seekTime;
      });

      //Synchronizing the Play/Pause button with the video.
      video.addEventListener("play", () => {
        playButton.textContent = "❚❚";
      });

      video.addEventListener("pause", () => {
        playButton.textContent = "►";
      });