// Function to mark a round as inactive
function advanceToNextRound(currentRound) {
    const previousRound = document.querySelector(`.round-${currentRound - 1}`);
    if (previousRound) {
      previousRound.classList.add('inactive-round');
    }
  }
  
  // Example: Advance to Round 2, marking Round 1 as inactive
  advanceToNextRound(2);
  