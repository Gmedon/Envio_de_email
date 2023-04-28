import { Request, Response } from 'express';
import nodemailer from 'nodemailer'

export const contato = async (req: Request, res: Response) => {

    //Nodemailer requesição!!!

    //Transporter
    let transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "6f4c615bda99a0",
          pass: "ad3c60890319f8"
        }
      });

      //Config da mensagem

      let message = {
        from: req.body.from,
        to: 'guilhermememedon@gmail.com',
        subject: req.body.assunto,
        html: req.body.texto,
        text: req.body.texto
      }

      //Envio da mensagem

      let info = await transport.sendMail(message);

      console.log('INFO', info);


      //FIM

    res.json({sucess: true});
}