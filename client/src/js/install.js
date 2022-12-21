const butInstall = document.getElementById('buttonInstall');

// 
// installing the PWA
//


// event handler for the "beforeinstallprompt" event
window.addEventListener("beforeinstallprompt", (event) => {

    // stores the triggered events
    window.deferredPrompt = event;
  
    // removes the hidden class from the button
    butInstall.classList.toggle("hidden", false);

  });
  

// event handler for the "butInstall" element
butInstall.addEventListener("click", async () => {

    const promptEvent = window.deferredPrompt;

    // ends the function if the deferred prompt is unavailable
    if (!promptEvent) {
        return;
    }

    // shows prompt
    promptEvent.prompt();

    // resets the deferred prompt variable
    window.deferredPrompt = null;

    butInstall.classList.toggle("hidden", true);

});
  

// event handler for the "appinstalled" event
window.addEventListener("appinstalled", (event) => {

    console.log("appinstalled", event);

    // clears prompt
    window.deferredPrompt = null;

});
