(() => {
    /**
     * Check and set a global guard variable.
     * If this content script is injected into the same page again,
     * it will do nothing next time.
     */
    if (window.hasRun) {
      return;
    }
    window.hasRun = true;
  
   
    /**
     * Listen for messages from the background script.
     */
    browser.runtime.onMessage.addListener((message) => {
    //   if (message.command === "beastify") {
    //     insertBeast(message.beastURL);
    //   } else if (message.command === "reset") {
    //     removeExistingBeasts();
    //   }
        console.log(`Received message ${message}`);
        alert(`Received message ${message}`)
    });
  })();
  
  
  console.log("WordBank is up and running")