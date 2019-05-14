FROM node:10-alpine AS ausbuilder
RUN adduser -h /home/aus -s /bin/bash aus; \
    chown -R aus /home/aus
USER aus
WORKDIR /home/aus
COPY --chown=aus . /home/aus
RUN mkdir /home/aus/.npm; \
    npm config set prefix /home/aus/.npm; \
    npm install --quiet --no-progress -g webpack@3.11.0; \
    npm install --quiet --no-progress -g @angular/cli@7.3.9; \
	npm install --quiet --no-progress;
ENV PATH=/home/aus/.npm/bin:$PATH

RUN	npm run build:ssr;
#CMD ["/bin/sh"]

FROM keymetrics/pm2:10-alpine
RUN adduser -h /home/aus -s /bin/bash aus; \
    chown -R aus /home/aus
USER aus
WORKDIR /home/aus
COPY --chown=aus --from=ausbuilder /home/aus/dist /home/aus/dist
EXPOSE 4000/tcp
ENTRYPOINT ["pm2-runtime","start","/home/aus/dist/server.js"]