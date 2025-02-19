var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    
    // Toggle max-height
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "vw";
      
      // Scroll content into view
      content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}



function changeImage(button) {
  const img = button.querySelector('img');
  const currentSrc = img.src;
  const currentName = currentSrc.split('/').pop(); // Gets filename from path
  
  // Check if it's currently showing the "New" version
  const isNewVersion = currentName.startsWith('New');
  const baseName = isNewVersion ? 
      currentName.slice(3) : // Remove 'New' prefix
      currentName;         // Keep original name
      
  // Create the new filename
  const newFilename = isNewVersion ? 
      baseName :            // Go back to original
      `New${baseName}`;    // Add New prefix
      
  // Construct full path
  const newPath = `Images/${newFilename}`;
  
  img.src = newPath;
}