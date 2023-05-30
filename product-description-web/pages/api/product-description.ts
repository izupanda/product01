import { NextApiRequest, NextApiResponse } from 'next';
import { ProductDescriptionService } from '../../../product-description-api/src/product-description/product-description.service';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { productName, marketplace } = req.body;
    const service = new ProductDescriptionService();
    const description = await service.generateDescription(productName, marketplace);
    res.status(200).json({ description });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}