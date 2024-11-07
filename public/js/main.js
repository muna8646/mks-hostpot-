async function subscribe(plan, amount) {
    const phone = prompt('Enter your M-PESA phone number (format: 254XXXXXXXXX):');
    if (!phone) return;

    try {
        const response = await fetch('/api/payment/stk-push', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone,
                amount,
                planId: plan
            })
        });

        const data = await response.json();
        
        if (data.ResponseCode === '0') {
            alert('Please check your phone to complete the payment');
        } else {
            alert('Payment initiation failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
}