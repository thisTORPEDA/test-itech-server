# Запуск

```
 npm install
 
 npx prisma generate
 
 npx prisma migrate dev --name init
 
 npm run dev
```

---

Комментарии
 - Призма не поддерживает нормально работу из json, а lowdb не подходит под тз, поэтому используются prisma + sqlite