# Smart Point of Sale system (POS)

## Overview

## Architecture Plan

<img src="./assets/images/Smart POS.jpg" />
<br><br>

## Setup for Production

```bash
# docker and docker-compose must be installed
make build-prod
```

## Setup for Development

Run Postgres dev container

```bash
# docker and docker-compose must be installed
make run-postgres-dev
```

And then run every app individually:

```bash
# Private UI app (React.js)
cd smart-pos-ui/private-ui-app
yarn dev
```

```bash
# Public UI app (Next.js)
cd smart-pos-ui/public-ui-app
yarn dev
```

```bash
# Backend app (Strapi)
cd smart-pos-strapi
yarn dev
```
