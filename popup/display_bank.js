console.log("wordbank is displayed")

function listenForClicks() {
    
    document.addEventListener("click", (e) => { 
        function func () {
            alert("func")
            // browser.tabs.sendMessage(tabs[0].id, {
            //     command: "click!",
            // });
        }

        function reportError(error) {
            alert(`error ${error}`)
        }


        browser.tabs.query({active: true, currentWindow: true})
            .then(func())
            .catch(reportError);
    })
}


/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
    document.querySelector("main").classList.add("hidden");
    document.querySelector("error-content").classList.remove("hidden");
    console.error(`Failed to execute beastify content script: ${error.message}`);
}

browser.tabs
    .executeScript({ file: "/content_scripts/main.js" })
    .then(listenForClicks)
    .catch(reportExecuteScriptError);