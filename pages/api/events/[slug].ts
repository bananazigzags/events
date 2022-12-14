import type { NextApiRequest, NextApiResponse } from 'next'
const {events} = require('./data.json')
import { Event } from '../../../types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event>
) {
  const evt = events.filter((ev: Event) => ev.slug === req.query.slug)
  if(req.method === "GET") {
    res.status(200).json(evt)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({message: `Method ${req.method} not allowed`})
  }
}
