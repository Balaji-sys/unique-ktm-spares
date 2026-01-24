import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, phone, email, service, problem } = body;

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['uniquektm7@gmail.com'],
            subject: `🔧 New Service Request: ${service} - ${name}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Service Request</title>
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                
                <!-- Header -->
                <div style="background-color: #ff6600; padding: 30px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px;">Unique KTM Spares</h1>
                    <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 14px;">New Service Booking Received</p>
                </div>

                <!-- Content -->
                <div style="padding: 40px; color: #333333;">
                    <div style="background-color: #fff7ed; border-left: 4px solid #ff6600; padding: 15px; margin-bottom: 25px;">
                        <p style="margin: 0; font-weight: bold; color: #9a3412;">Service Requested</p>
                        <p style="margin: 5px 0 0 0; font-size: 18px; color: #c2410c;">${service}</p>
                    </div>

                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #666666; width: 140px;">Customer Name</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #111111;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #666666;">Phone Number</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #111111;">
                                <a href="tel:${phone}" style="color: #ff6600; text-decoration: none;">${phone}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #666666;">Email Address</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #111111;">
                                <a href="mailto:${email}" style="color: #ff6600; text-decoration: none;">${email}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; color: #666666; vertical-align: top;">Reported Problem</td>
                            <td style="padding: 12px 0; font-weight: 400; color: #111111; line-height: 1.5;">${problem || 'No specific problem reported'}</td>
                        </tr>
                    </table>

                    <div style="margin-top: 30px; text-align: center;">
                        <a href="mailto:${email}?subject=Re: Your Service Request for ${service}" style="display: inline-block; background-color: #18181b; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">Reply to Customer</a>
                    </div>
                </div>

                <!-- Footer -->
                <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                    <p style="margin: 0; color: #64748b; font-size: 12px;">Unique KTM Spares Automated System</p>
                    <p style="margin: 5px 0 0 0; color: #cbd5e1; font-size: 12px;">Powered by Resend</p>
                </div>
            </div>
        </body>
        </html>
            `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ message: 'Email sent successfully', data });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
