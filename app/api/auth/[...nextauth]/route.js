const cors = require('cors');
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = ['http://localhost:3000','http://localhost:3001', 'https://radani.vercel.app','https://adm-radani.vercel.app', 'https://radani-conf.vercel.app',"https://www.radaniconf.com.br",]
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Não permitido CORS'));
    }
  },
  optionsSuccessStatus: 200,
};

export { GET, POST } from "@/auth";
