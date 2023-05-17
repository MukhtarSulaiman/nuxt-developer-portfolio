import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { MailOption } from '../../types/index';

export default defineEventHandler( async (event: any): Promise<any> => {

    const { data }  = await readBody(event);

    const { 
        CLIENT_ID, CLIENT_SECRET, REDIRECT_URL,
        SENDER_USER, RECEIVER_USER, REFRESH_TOKEN 
    } = useRuntimeConfig();

    const OAuth2Client = new google.auth.OAuth2(
        CLIENT_ID, CLIENT_SECRET, REDIRECT_URL
    );

    OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
    
    try {
        const accessToken = await OAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: SENDER_USER,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        const mailOption: MailOption = {
            from: `'${data.fullName}' <${SENDER_USER}>`,
            to: RECEIVER_USER,
            subject: data.subject,
            html: `
                <ul>
                    <li>Nom: <b>${data.fullName}</b></li>
                    <li>E-mail: ${data.email}</li>
                    <li>Subjet: ${data.subject}</li>
                </ul>
                <p>${data.message}</p>`,
        };

        const result = await transporter.sendMail(mailOption);

        return event.res.end('cotact.mail.response_message');
    } catch (error: any) {
        return event.res.end(error)
    }        
});