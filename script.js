function calculateGrade() {
  const name = document.getElementById("name").value.trim();
  const marksInput = document.getElementById("marks").value.trim();
  const resultDiv = document.getElementById("result");

  if (name === "" || marksInput === "") {
    alert("Please enter both name and marks!");
    return;
  }

  const marksArray = marksInput.split(",").map(num => parseFloat(num.trim()));
  if (marksArray.some(isNaN)) {
    alert("Please enter valid numeric marks separated by commas.");
    return;
  }

  const totalMarks = marksArray.reduce((a, b) => a + b, 0);
  const average = totalMarks / marksArray.length;

  let grade;
  if (average >= 90) grade = "A";
  else if (average >= 75) grade = "B";
  else if (average >= 60) grade = "C";
  else if (average >= 40) grade = "D";
  else grade = "F";

  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
    <h3>Result Summary</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Total Marks:</strong> ${totalMarks}</p>
    <p><strong>Average:</strong> ${average.toFixed(2)}%</p>
    <p><strong>Grade:</strong> ${grade}</p>
    <p><strong>Status:</strong> ${
      grade === "F"
        ? "<span style='color: red;'>❌ Failed</span>"
        : "<span style='color: #0f0;'>✅ Passed</span>"
    }</p>
  `;
}
