import nodemailer from 'nodemailer'

const EMAIL_PROVIDER = 'gmail'
const EMAIL_USERNAME = 'romanebegon.com.contact@gmail.com'
const EMAIL_PASSWORD = 'sMc!dp&skNKoe!5Te4YFq74$M5bkq5BMMDBsg#hY'

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
    from: EMAIL_USERNAME,
    to: 'sacha.bejaud31@gmail.com',
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
