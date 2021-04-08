import nodemailer from 'nodemailer'

const EMAIL_PROVIDER = 'gmail'
const EMAIL_USERNAME = process.env.EMAIL_USERNAME
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD
const EMAIL_TO = process.env.EMAIL_TO

export async function handler (event, context) {
  // Enable async handler
  context.callbackWaitsForEmptyEventLoop = false

  const transporter = nodemailer.createTransport({
    service: EMAIL_PROVIDER,
    auth: {
      user: EMAIL_USERNAME,
      pass: EMAIL_PASSWORD
    }
  })

  const { body } = event

  const info = await transporter.sendMail({
    from: 'Formulaire de contact - romanebegon.com',
    to: EMAIL_TO,
    subject: 'Nouvelle demande de contact depuis romanebegon.com !',
    text: body
  })

  console.log('Message sent: %s', info.messageId)

  return {
    statusCode: info.rejected.length ? 500 : 200,
    headers: {},
    body: 'OK'
  }
}
