import Gun from 'gun/gun';
import 'gun/sea';

export const gun = Gun({
  peers: ['https://your-gun-relay-server.herokuapp.com/gun']
});

export const user = gun.user();

export const createUser = async () => {
  const alias = 'user-' + Date.now();
  const pass = Math.random().toString(36).slice(-8);
  await user.create(alias, pass);
  await user.auth(alias, pass);
  return { alias, pass };
};