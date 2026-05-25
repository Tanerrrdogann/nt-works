FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY index.html tsconfig.json vite.config.ts ./
COPY src ./src
COPY public ./public

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--port", "3000"]
