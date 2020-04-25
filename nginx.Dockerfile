FROM nginx:1.17.10-alpine

RUN mkdir -p /var/www && \
  rm /etc/nginx/conf.d/default.conf

COPY . /var/www
COPY ./ContainersConfig/nginx/conf.d/k8s.conf /etc/nginx/conf.d/default.conf