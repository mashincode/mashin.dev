FROM python:latest

COPY / /

WORKDIR /

RUN pip install --upgrade -r requirements.txt
COPY ./docker/python/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
