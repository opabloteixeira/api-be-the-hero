
# Be the hero


## knex

- yarn add knex
- yarn add sqlite3 (ou outro db)
- npx knex init
- Configurar diretório onde a migration vai ser criada

### .knexfile.js
```
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },
```

### Migrates
- npx knex migrate:make "OqueAMigrationFaz"

Desfazer a ultima migrate
- npx knex migrate:rollback

Listar migrates executadas
- npx knex migrate:status

Executa a migrate
- npx knex migrate:latest  
