import { MidtransClient } from 'midtrans-node-client';
import { NextRequest, NextResponse } from 'next/server';

const snap = new MidtransClient.Snap({
  isProduction: false,
  serverKey: process.env.NEXT_SECRET,
  clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT,
});

export const POST = async (request: NextRequest) => {
  const { id, total } = await request.json();

  const parameter = {
    transaction_details: {
      order_id: id,
      gross_amount: total,
    },
  };

  const token = await snap.createTransactionToken(parameter);
  return NextResponse.json({ token });
};
