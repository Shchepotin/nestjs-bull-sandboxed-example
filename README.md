# NestJS Bull queues. Example threaded (sandboxed) processing

## Install and run

Run Redis via docker.

```bash
docker-compose up -d
```

Install dependencies:

```bash
npm install
```

Run App:

```bash
npm run start:dev
```

Open browser

```
http://localhost:3000/heavy-job
```

Try reload page few times for adding heavy job, and check your terminal.
