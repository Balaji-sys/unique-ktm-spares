import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, phone, email, productName, quantity } = body;

        // Validate required fields
        if (!name || !phone || !email || !productName || !quantity) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Unique KTM Spares <onboarding@resend.dev>',
            to: 'uniquektm7@gmail.com',
            subject: `New Order Request: ${productName}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        .header {
                            background: linear-gradient(135deg, #FF6600 0%, #FF8533 100%);
                            color: white;
                            padding: 30px;
                            border-radius: 10px 10px 0 0;
                            text-align: center;
                        }
                        .header h1 {
                            margin: 0;
                            font-size: 24px;
                        }
                        .content {
                            background: #f9f9f9;
                            padding: 30px;
                            border-radius: 0 0 10px 10px;
                        }
                        .info-row {
                            margin: 15px 0;
                            padding: 12px;
                            background: white;
                            border-left: 4px solid #FF6600;
                            border-radius: 4px;
                        }
                        .label {
                            font-weight: bold;
                            color: #FF6600;
                            margin-bottom: 5px;
                        }
                        .value {
                            color: #333;
                        }
                        .order-highlight {
                            background: #FF6600;
                            color: white;
                            padding: 20px;
                            border-radius: 8px;
                            margin: 20px 0;
                            text-align: center;
                        }
                        .product-name {
                            font-size: 20px;
                            font-weight: bold;
                            margin-bottom: 10px;
                        }
                        .quantity {
                            font-size: 16px;
                            opacity: 0.9;
                        }
                        .footer {
                            text-align: center;
                            margin-top: 20px;
                            color: #666;
                            font-size: 12px;
                        }
                        .action-box {
                            margin-top: 30px;
                            padding: 15px;
                            background: #fff3e0;
                            border-radius: 8px;
                            border: 1px solid #ffe0b2;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>🛒 New Order Request</h1>
                            <p style="margin: 10px 0 0 0; opacity: 0.9;">Unique KTM Spares</p>
                        </div>
                        
                        <div class="content">
                            <div class="order-highlight">
                                <div class="product-name">${productName}</div>
                                <div class="quantity">Quantity: ${quantity} ${parseInt(quantity) > 1 ? 'units' : 'unit'}</div>
                            </div>

                            <h2 style="color: #FF6600; margin-top: 25px;">Customer Details</h2>
                            
                            <div class="info-row">
                                <div class="label">👤 Name</div>
                                <div class="value">${name}</div>
                            </div>

                            <div class="info-row">
                                <div class="label">📞 Phone Number</div>
                                <div class="value"><a href="tel:${phone}" style="color: #FF6600; text-decoration: none;">${phone}</a></div>
                            </div>

                            <div class="info-row">
                                <div class="label">📧 Email Address</div>
                                <div class="value"><a href="mailto:${email}" style="color: #FF6600; text-decoration: none;">${email}</a></div>
                            </div>

                            <div class="action-box">
                                <strong style="color: #FF6600;">⚡ Action Required:</strong>
                                <p style="margin: 10px 0 0 0; color: #666;">
                                    Please contact <strong>${name}</strong> as soon as possible to confirm their order for <strong>${quantity}x ${productName}</strong>.
                                </p>
                            </div>
                        </div>

                        <div class="footer">
                            <p>This order was submitted through the Unique KTM Spares website</p>
                            <p>Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Order request sent successfully', data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing order:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
