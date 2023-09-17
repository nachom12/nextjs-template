# Primera etapa: construye la aplicación Next.js
FROM node:16-alpine AS builder

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

# Segunda etapa: Agrega Nginx y configura la aplicación
FROM nginx:alpine

# Copia la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos estáticos generados por Next.js desde la etapa de construcción
COPY --from=builder /app/out /var/www/out
COPY public /usr/share/nginx/html/public
COPY styles /usr/share/nginx/html/styles

# Expone el puerto 80, donde Nginx atenderá las solicitudes
EXPOSE 80

# Comienza Nginx al iniciar el contenedor
CMD ["nginx", "-g", "daemon off;"]
