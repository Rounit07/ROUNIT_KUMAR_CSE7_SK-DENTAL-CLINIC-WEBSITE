<script>
    document.getElementById('appointmentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                form.style.display = 'none';
                document.getElementById('formSuccess').style.display = 'block';
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            alert('There was a problem submitting your form. Please try again or call us directly.');
            console.error('Error:', error);
        });
    });
</script>