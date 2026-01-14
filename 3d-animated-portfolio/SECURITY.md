# 🔐 Instrucciones de Seguridad - Variables de Entorno

## ⚠️ ACCIÓN INMEDIATA REQUERIDA

Tu archivo `.env` con credenciales reales **ya ha sido visto en el repositorio**. 

### 🚨 Pasos Críticos de Seguridad

#### 1. Eliminar .env del historial de Git

```bash
# Ve al directorio del proyecto
cd 3d-animated-portfolio

# Elimina el .env del índice de Git (sin borrarlo localmente)
git rm --cached .env

# Commit el cambio
git commit -m "security: remove .env from repository"

# Push los cambios
git push origin main
```

#### 2. Regenerar Credenciales de EmailJS

**IMPORTANTE**: Como las credenciales ya están expuestas, debes regenerarlas:

1. Ve a [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Borra el Service ID actual
3. Crea uno nuevo
4. Genera nuevas claves públicas/privadas
5. Actualiza tu archivo `.env` local

#### 3. Configurar Variables de Entorno en Firebase

Para que tu deployment funcione, añade las variables en Firebase:

```bash
# Instala Firebase CLI si no la tienes
npm install -g firebase-tools

# Configura las variables de entorno
firebase functions:config:set emailjs.service_id="tu_nuevo_service_id"
firebase functions:config:set emailjs.template_id="tu_nuevo_template_id"
firebase functions:config:set emailjs.public_key="tu_nueva_public_key"
```

#### 4. Configurar GitHub Secrets

Para el workflow de GitHub Actions:

1. Ve a tu repositorio en GitHub
2. Settings → Secrets and variables → Actions
3. Crea los siguientes secrets:
   - `VITE_SERVICE_ID`
   - `VITE_TEMPLATE_ID`
   - `VITE_PUBLIC_KEY`
   - `FIREBASE_TOKEN` (obtén con `firebase login:ci`)

---

## ✅ Verificación

### Comprueba que .env NO esté en Git:

```bash
git ls-files | grep .env
```

**Resultado esperado**: No debería aparecer nada

### Verifica que .gitignore incluya .env:

```bash
cat .gitignore | grep "\.env"
```

**Resultado esperado**: Debe mostrar `.env` y variantes

---

## 📝 Uso Correcto de Variables de Entorno

### Para Desarrollo Local:

```bash
# 1. Copia el archivo de ejemplo
cp .env.example .env

# 2. Edita .env con tus credenciales reales
nano .env

# 3. Nunca hagas commit de .env
git status  # .env NO debe aparecer aquí
```

### Para Deployment:

- **Firebase**: Usa `firebase functions:config:set`
- **Vercel**: Usa el dashboard de variables de entorno
- **Netlify**: Usa el dashboard de variables de entorno
- **GitHub Actions**: Usa Secrets

---

## 🔍 Auditoría de Seguridad

### Revisa si hay otros archivos sensibles:

```bash
# Busca archivos que podrían contener secretos
git ls-files | grep -E "\.(env|key|pem|p12|json)$"

# Revisa el historial de Git
git log --all --full-history -- .env
```

### Limpia el historial (Opción Avanzada):

Si quieres eliminar `.env` completamente del historial:

```bash
# ADVERTENCIA: Esto reescribe la historia de Git
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env" \
  --prune-empty --tag-name-filter cat -- --all

# Force push (cuidado!)
git push origin --force --all
```

---

## 📚 Recursos

- [GitHub - Removing sensitive data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)
- [EmailJS Security Best Practices](https://www.emailjs.com/docs/security/security-best-practices/)
- [12 Factor App - Config](https://12factor.net/config)

---

## ✨ Estado Actual

- ✅ `.gitignore` actualizado
- ✅ `.env.example` creado
- ✅ Variables de entorno documentadas en README
- ⚠️ **Pendiente**: Eliminar `.env` del historial
- ⚠️ **Pendiente**: Regenerar credenciales de EmailJS

---

**Recuerda**: Las credenciales expuestas públicamente deben considerarse comprometidas y deben ser regeneradas inmediatamente.
