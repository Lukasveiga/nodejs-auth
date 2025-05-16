import express from 'express';
import { defineAbilitiesFor } from './abilities/defineAbilities';
import adminRoutes from './routes/admin';

const app = express();
const PORT = 3000;

app.use((req, _, next) => {
  const role = (req.query.role as string) || 'guest';
  req.ability = defineAbilitiesFor(role);
  req.userRole = role;
  next();
});

app.use('/admin', adminRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
