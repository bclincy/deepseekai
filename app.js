import OpenAI from "openai";
import 'dotenv/config'


const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: process.env.OPENAI_API_KEY,

});

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "Can you build a Web site for individual who is a Software Developer" }],
        model: "deepseek-chat",
    });

    console.log(completion.choices[0].message.content);
}

main();