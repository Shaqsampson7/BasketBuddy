function addItem() {
  let newItem = document.getElementById('list-item').value;
  if (newItem.length < 5) {
      showModal("*Hello Buddy, let's give your item a bit more detail. Remember, submission must be more than five characters.");
  } else {
      // Add the new item to the list section
      let newSection = document.createElement('section');
      newSection.innerHTML = '<div class="container"><h2>' + newItem + '</h2></div>';
      document.getElementById('list-form').insertAdjacentElement('afterend', newSection);
      
      // Clear the input field after adding the item
      document.getElementById('list-item').value = '';

      const image = document.querySelector('img');
      let direction = 1; // 1 for moving right, -1 for moving left
      let position = 0;
  
      function moveImage() {
          position += direction; // Increment or decrement position based on direction
          image.style.left = position + 'px';
  
          if (position >= window.innerWidth - image.width) {
              direction = -1; // Change direction to move to the left when reaching the right edge
          }
  
          if (position <= 0) {
              direction = 1; // Change direction to move to the right when reaching the left edge
          }
  
          requestAnimationFrame(moveImage); // Call moveImage() again for smooth animation
      }
  
      moveImage();
  };