import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
        `    ☮️MY MASTER GROUP☮️\n\n*🎇MADARA support:🎇* *https://www.facebook.com/profile.php?id=100079264362856*\n\n*☮️JOIN MY FB GROUP☮️*:*https://www.facebook.com/groups/600441174428472/?ref=share*`,
           MessageType.text
        ))
        const n = [
            'https://media.tenor.com/videos/b7d713d72b566213ccb3ac7fc8e679b2/mp4'
        ]
        let beckylynch = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url:beckylynch }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Sent you the support Link in personal message \n` }
        )

        }
}
