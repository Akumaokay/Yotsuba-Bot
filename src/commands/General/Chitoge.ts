/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "madara",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}madara`,
			baseXp: 2000,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/8B5CLfU_u1EAAAPo/%D9%85%D8%A7%D8%AF%D8%A7%D8%B1%D8%A7.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `☮️ *MADARA* ☮️\n\n🍀 *Description: A WhatsApp Bot With Rich NSFW features based on chitoge.*\n\n🌐 *OFFICIAL BOT URL: https://github.com/animefutaba/Yotsuba-Bot.git* \n\n 📒 *Guide: https://github.com/animefutaba/Yotsuba-Bot.git* \n\n 👾 *BOT URL:https://github.com/animefutaba/Yotsuba-Bot.git* \n`,
			}
		);
	};
}
