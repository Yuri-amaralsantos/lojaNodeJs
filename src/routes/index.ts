import express from 'express';
import { register, login } from '../controllers/authController';
import { createProduct, listProducts, deleteProduct } from '../controllers/productController';
import { authenticateJWT } from '../middleware/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Registra um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username, password]
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Usuário já existe
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Faz login e retorna um token JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username, password]
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token JWT retornado
 *       401:
 *         description: Credenciais inválidas
 */

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Cria um produto
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Produto criado
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Lista todos os produtos
 *     responses:
 *       200:
 *         description: Lista de produtos
 */

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Deleta um produto
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do produto a ser deletado
 *     responses:
 *       200:
 *         description: Produto deletado com sucesso
 *       403:
 *         description: Sem permissão para deletar
 *       404:
 *         description: Produto não encontrado
 */



router.post('/register', register);
router.post('/login', login as any);
router.post('/products', authenticateJWT, createProduct);
router.get('/products', listProducts);
router.delete('/products/:id', authenticateJWT, deleteProduct);

export default router;
