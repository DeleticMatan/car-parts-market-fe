const Router = require('nextjs-dynamic-routes');

const router = new Router();

router.add({
  name: 'index',
  pattern: '/',
});

router.add({
  name: 'activate',
  page: '/index',
  pattern: '/activate',
});

router.add({
  name: 'reset',
  page: '/index',
  pattern: '/reset',
});

router.add({
  name: 'profil',
  pattern: '/profil',
});

router.add({
  name: 'oglas-delovi-i-oprema',
  page: '/single',
  pattern: '/delovi-i-oprema/:id',
});

router.add({
  name: 'oglas-gume',
  page: '/single',
  pattern: '/gume/:id',
});

router.add({
  name: 'oglas-felne-i-ratkapne',
  page: '/single',
  pattern: '/felne-i-ratkapne/:id',
});

router.add({
  name: 'korisnici-profil',
  page: '/user',
  pattern: '/korisnici/:id',
});

module.exports = router;
