import { NextResponse } from 'next/server';

const apiKey = process.env.OPENAI_API_KEY!;
const baseUrl = process.env.OPENAI_BASE_URL!;
const model = process.env.OPENAI_MODEL!;
const angelPrompt =
  '你是一个人类颜值分析专家，请分析这张照片的颜值，并且给出百分制的打分，最后给出改进意见。';

export async function POST(request: Request) {
  const formData = await request.formData();
  const image = formData.get('image');

  if (!image) {
    return NextResponse.json({ error: 'No image provided' }, { status: 400 });
  }

  const llmResponse = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: angelPrompt },
            {
              type: 'image_url',
              image_url: { url: `${image}`, detail: 'low' },
            },
          ],
        },
      ],
      max_tokens: 300,
    }),
  });

  console.log('loading response from LLM');
  const response = await llmResponse.json();
  console.log('result status code:', llmResponse.status);
  console.log('result body:', JSON.stringify(response.choices[0].message));

  return NextResponse.json({ message: response.choices[0].message.content });
}
