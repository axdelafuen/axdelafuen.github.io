FROM php:8.0-apache as base

COPY . /var/www/html/

WORKDIR /var/www/html/
RUN sed -i '1i\<base href="https://codefirst.iut.uca.fr/containers/axelde_la_fuente-portfolio/">' ./index.html

EXPOSE 80
