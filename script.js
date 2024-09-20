const combinedOutput = document.getElementById('combinedOutput');

document.getElementById('fileInput1').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('fileDisplay1').innerText = e.target.result;
            updateCombinedOutput();
        };
        reader.readAsText(file);
    }
});

document.getElementById('fileInput2').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('fileDisplay2').innerText = e.target.result;
            updateCombinedOutput();
        };
        reader.readAsText(file);
    }
});

function updateCombinedOutput() {
    const content1 = document.getElementById('fileDisplay1').innerText;
    const content2 = document.getElementById('fileDisplay2').innerText;
    combinedOutput.innerText = `File 1:\n${content1}\n\nFile 2:\n${content2}`;
}
