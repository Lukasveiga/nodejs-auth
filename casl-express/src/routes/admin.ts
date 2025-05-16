import { Router } from 'express';
import { checkAbility } from '../middleware/checkAbility';

const router = Router();

router.get('/users', checkAbility('read', 'User'), (req, res) => {
    res.json({ message: `${req.userRole} pode ler usuários.` })
})

router.put('/users', checkAbility('update', 'User'), (req, res) => {
  res.json({ message: `${req.userRole} pode atualizar usuários.` });
});

router.delete('/users', checkAbility('delete', 'User'), (req, res) => {
  res.json({ message: `${req.userRole} pode deletar usuários.` });
});

router.get('/settings', checkAbility('manage', 'Settings'), (req, res) => {
  res.json({ message: `${req.userRole} pode gerenciar configurações.` });
});

router.get('/reports', checkAbility('read', 'Report'), (req, res) => {
  res.json({ message: `${req.userRole} pode ler os reports.` })
})

export default router;