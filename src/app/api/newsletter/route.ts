import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const dc = process.env.MAILCHIMP_DC;
    const listId = process.env.MAILCHIMP_LIST_ID;
    const apiKey = process.env.MAILCHIMP_API_KEY;

    const providerRes = await fetch(`https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `apikey ${apiKey}`
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed'
      })
    });

    if (!providerRes.ok) {
      const err = await providerRes.text();
      return NextResponse.json({ error: err }, { status: 400 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}