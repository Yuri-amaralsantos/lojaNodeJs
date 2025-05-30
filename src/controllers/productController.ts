import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const createProduct = async (req: Request, res: Response) => {
  const { name, price } = req.body
  const ownerId = (req as any).user.id

  const product = await prisma.product.create({
    data: { name, price, ownerId },
  })

  res.status(201).json(product)
}

export const listProducts = async (_req: Request, res: Response) => {
  const products = await prisma.product.findMany()
  res.json(products)
}

export const deleteProduct = async (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const userId = (req as any).user.id;

  const product = await prisma.product.findUnique({ where: { id: productId } });

  if (!product) {
   res.status(404).json({ message: 'Produto não encontrado' });
  }

  if (product!.ownerId !== userId) {
   res.status(403).json({ message: 'Você não tem permissão para deletar este produto' });
  }

  await prisma.product.delete({ where: { id: productId } });

  res.status(200).json({ message: 'Produto deletado com sucesso' });
};

