fetch('resume.json')
  .then(response => response.json())
  .then(data => {
    // Data is available here
    console.log(data);
    // Perform any operations on the data
    // ...
  })
  .catch(error => {
    console.error('Error:', error);
  });