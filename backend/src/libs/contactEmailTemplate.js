
const header = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enquiry Receipt</title>
    <style>
        body {
            background-color: #f3f4f6;
            padding: 24px;
            font-family: Arial, sans-serif;
        }
        .container {
            max-width: 32rem;
            margin: 0 auto;
            background-color: #ffffff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            overflow: hidden;
        }
        .header {
            background-color: #2563eb;
            padding: 24px;
            text-align: center;
        }
        .header h1 {
            color: #ffffff;
            font-size: 1.875rem;
            font-weight: bold;
        }
        .content {
            padding: 24px;
        }
        .section {
            margin-top: 16px;
        }
        .section h2 {
            font-size: 1.125rem;
            font-weight: 600;
            color: #1f2937;
        }
        .section p {
            color: #555;
            margin: 8px 0;
        }
        .section p span {
            font-weight: 700;
        }
        .footer {
            background-color: #e5e7eb;
            padding: 16px;
            text-align: center;
        }
        .footer p {
            color: #4b5563;
            font-size: 0.875rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Submission Received From Contact Form</h1>
        </div>
        <div class="content">
            <div class="section">
                <h2>Customer Information</h2>`;

const footer = `</div>
        </div>
        <div class="footer">
            <p>© 2025 Rainbow Rise Reality. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

export const contactTemplate = (name, phone, message) => {
    let body = `<p>Name: <span>${name}</span></p>
                <p>Phone: <a href="tel:${phone}" style="font-weight: 700;">${phone}</a></p>
            </div> `;
    if(message){
        body += `<div class="section">
                <h2>Enquiry Details</h2>
                <p>Message: <span>${message}</span></p>
            </div>`;
    }
    body += `<div class="section">
                <h2>Date</h2>
                <p>Date: <span>${new Date()}</span></p>`;
            
    return header+body+footer;
}