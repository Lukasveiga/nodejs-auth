import { Router } from 'express';
import { checkAbility } from '../middleware/checkAbility';
import { Subjects } from '../abilities/defineAbilities';
import { Actions } from '../abilities/defineAbilities';

const router = Router();

router.get('/users', checkAbility(Actions.Read, Subjects.User), (req, res) => {
    res.json({ message: `${req.userRole} pode ler usuários.` })
})

router.put('/users', checkAbility(Actions.Update, Subjects.User), (req, res) => {
  res.json({ message: `${req.userRole} pode atualizar usuários.` });
});

router.delete('/users', checkAbility(Actions.Delete, Subjects.User), (req, res) => {
  res.json({ message: `${req.userRole} pode deletar usuários.` });
});

router.get('/settings', checkAbility(Actions.Manage, Subjects.Settings), (req, res) => {
  res.json({ message: `${req.userRole} pode gerenciar configurações.` });
});

router.get('/reports', checkAbility(Actions.Read, Subjects.Report), (req, res) => {
  res.json({ message: `${req.userRole} pode ler os reports.` })
})

export default router;