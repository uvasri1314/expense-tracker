
function saveSettings(event) {
    event.preventDefault();
  
   
    const option1Checked = document.getElementById('option1').checked;
    const option2Checked = document.getElementById('option2').checked;
    const option3Checked = document.getElementById('option3').checked;
    const option4Checked = document.getElementById('option4').checked;
  
    console.log("Option 1:", option1Checked);
    console.log("Option 2:", option2Checked);
    console.log("Option 3:", option3Checked);
    console.log("Option 4:", option4Checked);
  }
  
 
  document.getElementById('settingsForm').addEventListener('submit', saveSettings);
  