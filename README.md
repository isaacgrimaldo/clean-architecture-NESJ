# Configuration

## Added .envs to connect and set port

```env
    DATABASE_URL=mysql://root:your_root_password@localhost:3306/your_database_name
    APP_PORT=3005 
```

### Install dependencies

```node
 yarn install
```

### Run Migrations

```node
    yarn prisma:migrate
    yarn prisma:deploy
    yarn prisma:status
```

### Run Project

```node
 npm run start:dev
```
