import nodemailer from 'nodemailer'

const EMAIL_PROVIDER = 'gmail'
const EMAIL_USERNAME = process.env.EMAIL_USERNAME
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD

const emails = process.env.EMAIL_TO.split(';')

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

  const messages = await Promise.all(emails.map(email => transporter.sendMail({
    from: 'Formulaire de contact - romanebegon.com',
    to: email,
    subject: 'Nouvelle demande de contact depuis romanebegon.com !',
    text: body
  })))

  messages.forEach(message => {
    console.log('Message sent: %s', message.messageId)
  })

  return {
    statusCode: messages.some(msg => msg.rejected.length) ? 500 : 200,
    headers: {},
    body: 'OK'
  }
}
