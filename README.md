# API-CRUD-MONGO-FINAL

**Nueva funcionalidad:**  
✔️ Búsqueda de productos por nombre (parcial e insensible a mayúsculas)  
✔️ Componente React **SearchBar** que actualiza la lista en tiempo real

---

## 🛠 Tecnologías utilizadas

- **Backend**  
  - Node.js & Express  
  - MongoDB + Mongoose  
  - JWT (jsonwebtoken)  
  - bcryptjs (hash de contraseñas)    
  - cors  
- **Frontend**  
  - React (Vite)  
  - React Router  
  - Context API para Auth (jwt-decode)  
  - Fetch API  
  - CSS puro

---

## 🚀 Cómo ejecutar

### 1. Clonar el repositorio  

```bash
git clone https://github.com/Artarexces/API-CRUD-MONGO-FINAL.git
cd API-CRUD-MONGO-FINAL 
```

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env      # Edita .env con tus datos
npm run dev               # levanta API en http://localhost:3000
```


### 3. Frontend

```bash
cd frontend
npm install
cp .env.example .env      # Edita .env con tus datos
npm run dev               # levanta UI en http://localhost:5173
```


## 🔧 Variables de entorno
### backend/.env.example
```env
PORT=3000
MONGODB_URI=mongodb+srv://usuario:pass@cluster0.xxx.mongodb.net/mi-db
JWT_SECRET=un_super_secreto
frontend/.env.example
```

```env
VITE_API_URL=http://localhost:3000/api
```

## 📦 Endpoints y ejemplos (Postman)
### 1. Registro de usuario

```bash
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "MiPass123"
}
```

### 2. Login y obtención de token

```pgsql
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "MiPass123"
}
```

Respuesta

```json
{
  "token": "<JWT_TOKEN>",
  "user": { "_id": "…", "email": "user@example.com" }
}
```
### 3. Listar usuarios

```bash
GET /api/auth
Authorization: Bearer <JWT_TOKEN>   # si la ruta está protegida
```

### 4. CRUD de productos

Listar todos

```sql
GET /api/products
Authorization: Bearer <JWT_TOKEN>
```
Crear

```pgsql
POST /api/products
Content-Type: application/json
Authorization: Bearer <JWT_TOKEN>

{
  "name": "Auriculares",
  "price": 59.99,
  "category": "Electrónica"
}
```

Actualizar

```bash
PATCH /api/products/:id
Authorization: Bearer <JWT_TOKEN>
Body (JSON) → { "price": 49.99 }
```
Eliminar

```bash
DELETE /api/products/:id
Authorization: Bearer <JWT_TOKEN>
```

### 5. Búsqueda por nombre
```pgsql
GET /api/products/search?name=<término>
Parcial e insensible a mayúsculas

200 OK con array de resultados si hay coincidencias

404 Not Found si no se encuentra ninguno
```

```json
# ejemplo 404
{
  "success": false,
  "message": "No se encontraron productos que contengan \"lap\""
}
```

## 🖥️ Uso en Frontend

Inicia sesión → guarda token en localStorage

El componente SearchBar envía peticiones GET /api/products/search?name=…

La lista de productos se actualiza automáticamente al tipear


## ✅ Validación conjunta

Iniciar backend y frontend

Registrar y loguear usuario (copiar <JWT_TOKEN>)

Probar endpoints protegidos en Postman con header

Usar la barra de búsqueda en la UI para filtrar productos

Confirmar respuesta 404 y array vacío según corresponda

